var UserData = require('../models/userModel');
var PaymentModel = require('../models/paymentUserModel');
var TaskModel = require('../models/taskModel');
var Mytask = require('../models/myTaskModel');
var Affiliasi = require('../models/AfiliateModel');
var AuthToken = require('../models/AuthTokenModel');
const TaskData = require('../models/TaskIdentifierModels');
var DaftarVendor = require('../models/DaftarVendorTugasModel');
var DaftarVip = require('../models/VipModel');
/**Adisonal Package */
const { validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fs = require('fs');
const Str = require('@supercharge/strings');
/* Setup Redis */
var configDB = require('../config/db');
var UserConf = require('../config/UserConfig');
/* Sequelize Setup */
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
/* End Sequelize Setup */
var moment = require('moment');
const jwt_decode = require('jwt-decode');
const packageConfig = require('../config/packageConf');
const multer = require('multer');
var Upload = require('../config/uploadFile');
/** Captcha Package Generator */
var svgCaptcha = require('svg-captcha');
const VipModel = require('../models/VipModel');
const MyTaskModel = require('../models/myTaskModel');
const affiliasiModels = require('../models/AfiliateModel');
const SelfPaymentModel = require('../models/SelfPaymentModel')
/** End Captcha Package Generator */

/* Generate Captcha */
exports.GenCaptcha = async (req, res) => {
  let OpCaptcha = {
    noise: 5,
  }
  var captcha = svgCaptcha.create(OpCaptcha);
  req.session.captcha = captcha.text;
  res.status(200).type('svg').send({ captchaSVG: captcha.data, text: captcha.text })
}
/* End Generate Captcha */

/* Get All Data User */
exports.GetAllDataUser = async (req, res) => {
  let User = await UserData.findAll({})
  if (User) {
    res.status(200).json(User);
  } else {
    res.status(404)
  }
}
/* End Get All Data User */




/* Register New User  */
exports.RegisterNewUser = async (req, res) => {
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    const alert = errors.array();
    res.status(404).send({ errMsg: alert, status: 404 });
  } else {
    var no_tlp = req.body.no_tlp;
    var kode_akun = req.body.kode_akun;
    var password = req.body.password1;
    var hashPassword = bcrypt.hashSync(password, 10);
    var generateKodeUser = Str.random(10)
    var CreateUser = new UserData({
      no_tlp,
      kode_akun: generateKodeUser,
      password: hashPassword,
      member: 'VIP0',
      email_user: ''

    })
    let User = await UserData.findAll({})
    if (User.length === 0) {

      await CreateUser.save()
        .then(result => {
          res.status(200).send({ message: `User ${result.no_tlp} Berhasil Di Buat ` })
        })
    } else if (User.length > 0) {
      if (kode_akun === undefined || kode_akun === '') {
        res.status(409).send({ message: "Kode Undangan Belum Di Isi" });
      } else {

        let FindKode = await UserData.findOne({ where: { kode_akun } })
        if (FindKode) {
          await CreateUser.save()
            .then(results => {
              const AffiliateUser = new Affiliasi({
                master_kode_akun: kode_akun,
                guest_kode: generateKodeUser,
                reward_ajak: 0,
                userId: results.id,
              })
              AffiliateUser.save().then(result => {
                console.log(result)
                res.status(200).send({ message: 'Akun Anda Telah Berhasil Dibuat', status: 200 })
              }).catch(err => {
                res.status(401).send({ message: `Error Internal ${err.message}`, status: 500 })
              })
            }).catch(err => {
              res.status(500).send({ message: `Error Internal ${err.message}`, status: 500 })
            })
        } else if (FindKode === null) {
          res.status(409).send({ message: 'Kode Undangan Tidak Di Temukan' });
        }
      }
    }
  }
}
/* End Register New User  */

/* user Login */
exports.Login = async (req, res) => {
  const { no_tlp, password } = req.body
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    const alert = errors.array();
    res.send({ errMsg: alert, status: 404 }).status(404);
  } else {
    const User = await UserData.findOne({ where: { no_tlp: no_tlp } })
    if (!User) {
      res.status(400).send({ message: 'User Tidak Di Temukan!', status: 400 });
    } else {

      await bcrypt.compare(password, User.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          var privateKey = fs.readFileSync('private.key');
          const tokenUser = jwt.sign(req.body, privateKey, { algorithm: 'HS256' });
          const Token = new AuthToken({
            user_id: User.id,
            token: tokenUser
          })
          Token.save()
          res.status(200).cookie("token", tokenUser, {
            httpOnly: true,
          }).send({ status: 200, message: 'Berhasil Login', tokenUser })
        } else {
          res.status(400).send({ status: 400, message: "Wrong Password" })
        }
      });
    }
  }
}
/* End user Login */

exports.IsLogin = async (req, res) => {
  try {
    const token = req.cookies.token;
    console.log(token)
    if (token === undefined || !token) {
      res.json(false);
    } else {
      var privateKey = fs.readFileSync('private.key');
      jwt.verify(token, privateKey);

      res.send(true);
    }
  } catch (err) {
    res.json(false);
  }
}



exports.EditPasswordBank = async (req, res) => {
  try {
    const token = req.cookies.token;
    const CurrentUser = await UserConf.CurrentUser(token);
    await UserData.update({
      password_bank: req.body.sandi_bank
    }, {
      where: {
        id: CurrentUser.id
      }
    }).then(result => {
      res.status(200).send({ message: 'Data Berhasil Di tambah', status: 200 });
    }).catch(err => {
      res.status(500).send({ message: 'Data Berhasil Di tambah', status: 500 });
    })
  } catch (err) {
    console.error(err)
  }
}



/* Logout User */
exports.Logout = async (req, res) => {
  try {

    // res
    //   .cookie("token", "", {
    //     httpOnly: true,
    //     expires: new Date(0),
    //     secure: true,
    //   })
    //   .send();
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0)
    }).send({ message: 'Success Logout' });
    req.logout();
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: `Error With ${err}`, status: 500 })
  }
}
/* End Logout User */


//===================================== Miliku Page User Controllers ============================================

/* Get Data Current User Topup */
exports.GetDataTopup = async (req, res) => {
  const token = req.cookies.token;
  var payload = jwt_decode(token)
  const User = await UserData.findOne({ where: { no_tlp: payload.no_tlp } })

  await PaymentModel.findAll({
    where: {
      user_id: User.id
    },

  }).then(result => {
    console.log(result)
    if (result === null) {
      res.json({ status: false })
    } else {
      res.status(200).send({ result, token, status: 200 })
    }
  }).catch(err => {
    res.status(500).send({ message: `Internal Server Error ${err.message}` })
  })


}
/* End Get Data Current User Topup */

/* Get Current User */
exports.GetCurrentUser = async (req, res) => {
  const token = req.cookies.token
  const payload = jwt_decode(token)
  await UserData.findOne({
    where: {
      no_tlp: payload.no_tlp
    }
  }).then(data_user => {
    res.status(200).json({ data_user, status: 200 })
  }).catch(err => {
    console.error(err)
  })
}
/*End Get Current User */

/* UpdateRekening */
exports.UpdateRekening = async (req, res) => {
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    const alert = errors.array();
    res.status(404).send({ errMsg: alert });
  } else {
    const { rekening, namabank } = req.body
    /* Get Current User As Token */
    const token = req.cookies.token
    const payload = jwt_decode(token);
    /* End Get Current User As Token */
    console.log(payload)
    await UserData.update({
      rekening,
      namabank
    }, {
      where: {
        no_tlp: payload.no_tlp
      }
    }).then(result => {
      console.log(result)
      res.status(200).send({ message: `Berhasil Menambahkan Akun Bank`, status: 200 });
    }).catch(err => {
      console.log(err)
      res.status(400).send({ message: `Error : ${err}`, status: 400 });
    })
  }
}
/* End UpdateRekening */

/* Update Password */
exports.EditPassword = async (req, res) => {
  const { sandi_lama, sandi_baru, konfrim_sandi } = req.body
  /* Get Current User As Token */
  const token = req.cookies.token
  const CurrentUser = await UserConf.CurrentUser(token);
  /* End Get Current User As Token */
  const hashPassword = bcrypt.hashSync(sandi_baru, 10);

  if (sandi_baru != konfrim_sandi) {
    res.send(400).send({ message: 'Password Tidak Sama ', status: 400 })
  }
  await bcrypt.compare(sandi_lama, CurrentUser.password, (err, isMatch) => {
    if (err) throw err;
    if (isMatch) {
      UserData.update({
        password: hashPassword
      }, {
        where: {
          id: CurrentUser.id
        }
      }).then(result => {
        res.send({ message: 'Password Berhasil Diubah', status: 200 })
      }).catch(err => {
        res.send({ message: `Error${err.message}`, status: 500 })
      })
    } else {
      res.send({ message: 'Password Lama Salah', status: 400 })
    }
  })
}
/* End Update Password */


//===================================== End Miliku Page User Controllers ============================================
//===================================== VIP Page ============================================
/* Kurangi Amount */
exports.KurangiPendapatan = async (req, res) => {
  const { vip_card_price, pendapatan_user, level } = req.body
  /* Get Current User As Token */
  const token = req.cookies.token
  const CurrentUser = await UserConf.CurrentUser(token);
  /* End Get Current User As Token */
  if (CurrentUser) {
    if (pendapatan_user !== null || pendapatan_user !== undefined) {
      const AmountRetrive = Math.floor(parseInt(pendapatan_user) - parseInt(vip_card_price))
      await UserData.update({
        pendapatan: parseInt(AmountRetrive),
        member: level
      }, {
        where: {
          id: CurrentUser.id
        }
      }).then(results => {
        res.status(200).send({ message: `Anda Telah Menjadi Member VIP`, status: 200 });
      }).catch(err => {
        console.error(err)
      })
    } else {
      res.status(400).send({ message: 'Anda Tidak Mempunyai Cukup Saldo', status: 400 });
    }
  }
}
/* End Kurangi Amount */


//===================================== End VIP Page ============================================
//===================================== Task Page ============================================
/* Get All Task */
exports.GetAllTask = async (req, res) => {
  const token = req.cookies.token
  if (token) {
    const Task = await TaskData.findAll({});
    res.status(200).json(Task);
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
}

/* End Get All Task */





/* AddNew Task Current User */
exports.AddedTask = async (req, res) => {
  const token = req.cookies.token
  var payload = jwt_decode(token)
  const TODAY_START = new Date().setHours(0, 0, 0, 0);
  const Now = new Date();
  const CurrentUser = await UserData.findOne({ where: { no_tlp: payload.no_tlp } })
  if (CurrentUser) {

    const BeforeAction = await TaskModel.findAll({
      attributes: [
        'user_id',
        [Sequelize.fn('sum', Sequelize.col('pengambilan_task')), 'total_amount'],
      ],
      group: ['user_id']
    })
    const FindAfter = await TaskModel.findAll({
      where: {
        'user_id': CurrentUser.id,
        createdAt: {
          // [Op.lte]: moment().subtract(1, 'days').toDate(),
          [Op.lte]: TODAY_START
        }
      }
    })
    if (FindAfter.length > 0) {
      for (let i = 0; i < FindAfter.length; i++) {
        const elVal = FindAfter[i];
        /* Delete Expired Task */
        await TaskModel.destroy({
          where: {
            user_id: elVal.user_id
          }
        })
      }
    } else {
      res.status(200).json({ total: BeforeAction });
    }
  }
}
/* End AddNew Task Current User */

/* insert task to database */
exports.InsertTask = async (req, res) => {
  const { task_count, code_task } = req.body
  const token = req.cookies.token
  var payload = jwt_decode(token)
  const User = await UserData.findOne({ where: { no_tlp: payload.no_tlp } })
  if (User) {
    const AllTask = await TaskData.findOne({ where: { unique_code: code_task } })
    const Task = new TaskModel({
      user_id: User.id,
      pengambilan_task: task_count,
      member: User.member === null ? 0 : User.member,
      unique_code: code_task,
      task_id: AllTask.id
    })
    await Task.save()
      .then(result => {
        console.log(AllTask.no_tlp_pedagang)
        const createNewTask = new Mytask({
          user_id: result.user_id,
          unique_code: code_task,
          member: User.member === null ? 0 : User.member,
          no_tlp_pedagang_tugas: AllTask.no_tlp_pedagang,
          cost_task: AllTask.cost_task,
          url_task: AllTask.link_tugas
        })
        createNewTask.save()
          .then(result => {
            res.status(200).send({ result, message: `Telah Mengambil Task`, status: 200 });
          }).catch(err => {
            console.error(err)
            res.status(400).send({ message: 'Silahkan Memulai Task', status: 400 });
          })
      }).catch(err => {
        console.error(err)
        res.status(400).send({ message: 'Silahkan Memulai Task', status: 400 });
      })
  }
}
/* End insert task to database */

/* Get My current task */
exports.GetMyCurrentTask = async (req, res) => {
  const token = req.cookies.token
  var payload = jwt_decode(token)
  const User = await UserData.findOne({ where: { no_tlp: payload.no_tlp } })
  await Mytask.findAll({
    where: {
      user_id: User.id
    },
  }).then(results => {
    res.status(200).send({ data: results, message: 'Success', status: 200 });
  }).catch(err => {
    console.log(err)
    res.status(400).send({ message: `Error: ${err.message}`, status: 400 });
  })
}
/* End Get My current task */

/* Get All Task Data */
exports.GetDataTask = async (req, res) => {
  try {
    const allTask = await TaskData.findAll({})
    res.status(200).send({ data: allTask, status: 200 })
  } catch (err) {
    console.log(err)
  }
}
/* End Get All Task Data */


/**Upload Task File */
var imageFile = Upload.fields([{ name: 'file', maxCount: 1 }])
exports.UploadTask = async (req, res) => {
  var token = req.cookies.token;
  var payload = jwt_decode(token)
  const User = await UserData.findOne({ where: { no_tlp: payload.no_tlp } })
  imageFile(req, res, (err) => {
    if (req.fileValidationError) {
      return res.status(400).send({ message: `${req.fileValidationError}` });
    }
    if (err instanceof multer.MulterError) {
      return res.status(501).send(err.code);
    }
    if (err) {
      return res.status(502).send({ message: err });
    }
    if (!req.files) {
      return res.status(404).send({ message: 'Harap Uplaod Gambar Dahulu' });
    }
    if (req.files && !err && !req.fileValidationError) {
      const { filename } = req.files.file[0]

      var { task_code, task_status } = req.body
      if (!token) return res.status(403).send({ message: 'Unautorize Use Please Login' });
      if (!task_code) return res.status(405).send({ message: 'Someting Bad Task Code Not Found' });
      if (task_code && token) {
        const CurrentTask = Mytask.findOne({
          where: {
            unique_code: task_code
          }
        })

        console.log(User)
        CurrentTask.then(result => {
          const CalculatePendapatan = Math.floor(result.cost_task + User.pendapatan)
          Mytask.update({
            image_file: filename,
            task_status: task_status
          }, {
            where: {
              unique_code: task_code
            }
          }).then(updateTask => {
            console.log(updateTask)
          }).catch(err => {
            console.log(err)
          })
          UserData.update({
            pendapatan: CalculatePendapatan,
          }, {
            where: {
              no_tlp: payload.no_tlp
            }
          }).then(result => {
            res.status(200).send({ message: 'Berhasil' })
          }).catch(err => {
            console.log(err)
          })

        })
      }
    }
  })
}
/**End Upload Task File */



//===================================== End Task Page ============================================


//============================ main Page ===============================
exports.GetAllCurrentTugas = async (req, res) => {
  const CurrentUserTask = await Mytask.findAll({ include: [{ model: UserData }] })
  res.status(200).json(CurrentUserTask);
}

exports.GetAllDaftarTugas = async (req, res) => {
  const Vendor = await DaftarVendor.findAll({});
  res.status(200).json(Vendor)
}

exports.GetAllVipMaster = async (req, res) => {
  const Vip = await DaftarVip.findAll({});
  res.status(200).json(Vip);
}
//============================ End Main Page ===============================

//===================================== End Dashboard User Controllers ============================================

//============================ Tambahan Fungsi Untuk Page Task List ===============================
exports.GetTaskAsVip = async (req, res) => {
  let { id } = req.params
  if (id !== undefined) {
    const Vip = await DaftarVip.findOne({ where: { vip_name: id } })
    const CurrentTugas = await TaskData.findAll({ where: { kategori_tugas: Vip.id }, include: [{ model: DaftarVendor }, { model: VipModel }] });
    console.log(CurrentTugas)
    if (CurrentTugas) {
      res.status(200).json(CurrentTugas);
    } else {
      res.status(404).send({ message: 'Tugas Tidak Ditemukan' })
    }

  } else {
    res.status(405).send({ message: 'Invalid Link' });
  }
}
//============================ End Tambahan Fungsi Untuk Page Task List ===============================

exports.GetTaskAsUserDone = async (req, res) => {
  let member_payload = [];
  const token = req.cookies.token
  const payload = jwt_decode(token);
  const User = await UserData.findOne({ where: { no_tlp: payload.no_tlp } })
  const Affiliasi = await affiliasiModels.findAll({ where: { master_kode_akun: User.kode_akun }, include: [{ model: UserData }] })
  Affiliasi.map(data => {
    MyTaskModel.findAll({ where: { user_id: data.userId, task_status: 'BERHASIL' } }).then(result => {
      member_payload.push(result)
    })
    console.log(member_payload)
  })
}


exports.GetTugasTidakBerhasil = async (req, res) => {
  const token = req.cookies.token
  const payload = jwt_decode(token);
  const User = await UserData.findOne({ where: { no_tlp: payload.no_tlp } })
  const MyTashDone = await MyTaskModel.findAll({ where: { user_id: User.id, task_status: 'GAGAL' } })
  if (MyTashDone) {
    res.status(200).json(MyTashDone)
  }
}
//============================ USER UPDATER ===============================

exports.DetailUser = async (req, res) => {
  const token = req.cookies.token
  const payload = jwt_decode(token);
  const { nama_akun, email_akun } = req.body
  console.log('nama akun', nama_akun)
  console.log('nama email', email_akun)
  console.log('payload', payload)
  if (token) {
    await UserData.update({
      nama_user: nama_akun,
      email_user: email_akun
    }, {
      where: {
        no_tlp: payload.no_tlp
      }
    }).then(results => {
      console.log(results)
      res.status(200).send({ message: 'Data Berhasil Di tambah', status: 200 });
    }).catch(err => {
      console.log(err)
      res.status(409).send({ message: 'Data Tidak Berhasil Di update', errData: err.response });
    })
  }
}

exports.GetMyTeamData = async (req, res) => {
  const token = req.cookies.token
  const { no_tlp } = jwt_decode(token)
  const User = await UserData.findOne({ where: { no_tlp }, include: [{ model: Affiliasi }] })
  const Team = await Affiliasi.findAll({ where: { master_kode_akun: User.kode_akun }, include: [{ model: UserData }] })
  if (Team) {
    res.status(200).json(Team);
  } else {
    res.status(404)
  }

}

/** Self Payment Config */
exports.PenddingTransaksiSelf = async (req, res) => {
  const token = req.cookies.token
  const { no_tlp } = jwt_decode(token)
  const FindCurrentUserTopup = await UserData.findOne({ where: { no_tlp } })
  if (FindCurrentUserTopup) {
    const { code_bank, no_rek, imgSrc } = req.body
    let payload = {
      code_self_pay: code_bank,
      no_rek: no_rek,
      image_channel: imgSrc,
      userId: FindCurrentUserTopup.id,
      nomor_tlp_pelanggan: FindCurrentUserTopup.no_tlp,
      kode_member: FindCurrentUserTopup.kode_akun,
      rekening: FindCurrentUserTopup.rekening,
      nama_pelanggan: FindCurrentUserTopup.nama_user,
      email_pelanggan: FindCurrentUserTopup.email_user,
      nama_bank: FindCurrentUserTopup.namabank,
      status_self_pay: 'PENDDING'
    }
    console.log(payload)
    const SelfPay = new SelfPaymentModel({ payload })

    await affiliasiModels.update({
      reward_ajak: '1000'
    }, {
      where: {
        guest_kode: FindCurrentUserTopup.kode_akun
      }
    })
    await SelfPay.save().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      console.log(err)
      res.status(400).send({ message: err.response.msg })
    })
  }
}

/* -------------------------------------------------------------------------- */
/*                                 self top up                                */
/* -------------------------------------------------------------------------- */

/* ----------------------------- create new pay ----------------------------- */
// TODO CREATE NEW SELF PAYMENT METHOD
exports.AddSelfPaymentMethod = async (req, res) => {

}

/* ----------------------------- end create pay ----------------------------- */