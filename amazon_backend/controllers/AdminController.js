/* Model Require */
const AdminModel = require('../models/AdminModel');
const TeamAdmin = require('../models/AdminTeamModel');
const AllTaskModel = require('../models/TaskIdentifierModels');
const RequestPenarikanDana = require('../models/RequestPenarikanModel');
const UserModel = require('../models/userModel');
const DaftarVendor = require('../models/DaftarVendorTugasModel');
const VipData = require('../models/VipModel');
const SelfPayment = require('../models/SelfPaymentModel');
/* Join Table Config */
const JoinDB = require('../config/joinSql');
const sequelize = require('../config/mysql');
/* End Model Require */
var bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt_decode = require('jwt-decode');
/**SuperCharge Func */
const Str = require('@supercharge/strings');
const Num = require('@supercharge/numbers')
/**End SuperCharge Func */
const fs = require('fs');
var jwt = require('jsonwebtoken');
const multer = require('multer');
var Upload = require('../config/uploadFile');

exports.RegisterAdmin = async (req, res) => {
    const { admin_email, admin_name, admin_kode, password } = req.body
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array();
        res.status(400).send({ message: alert })
    } else {
        const AdminData = await AdminModel.findAll({})
        if (AdminData.length === 0) {
            const generateCode = Str.random(15)
            const hashPassword = bcrypt.hashSync(password, 15);
            const Admin = new AdminModel({
                admin_email,
                admin_name,
                admin_kode: generateCode,
                password: hashPassword
            })
            await Admin.save().then(result => {
                res.status(201).send({ message: "Admin Telah di tambah" })
            })
        }
        if (AdminData.length > 0) {
            const KodeMatch = await AdminModel.findOne({ where: { admin_kode } })
            if (KodeMatch) {
                const generateKodeUser = Str.random(5)
                const hashPassword = bcrypt.hashSync(password, 15);
                const Admin = new AdminModel({
                    admin_email,
                    admin_name,
                    admin_kode: generateKodeUser,
                    password: hashPassword
                })
                const CreateNewAdmin = await Admin.save()
                console.log(CreateNewAdmin)
                const Team = new TeamAdmin({
                    master_admin_kode: admin_kode,
                    team_admin_kode: CreateNewAdmin.admin_kode
                })
                await Team.save().then(data => {
                    console.log(data)
                    res.status(200).send({ message: `Admin telah di tambah berdasarkan refrensi ${data.master_admin_kode}` })
                }).catch(err => {
                    console.log(err)
                })
            } else {
                res.status(404).send({ message: 'Kode Admin Tidak Valid' });
            }
        }
    }
}

exports.GetAllTeam = async (req, res) => {
    const { kode } = req.body
    const AdminTeam = await TeamAdmin.findAll({ where: { master_admin_kode: kode } })
    AdminTeam.map((teamData) => {
        AdminModel.findAll({ where: { admin_kode: teamData.team_admin_kode } }).then(result => {
            console.log(result)

            res.json(result);
        })
    })
}

/* Function Login Admin */
exports.AuthLogin = async (req, res) => {
    const { admin_email, password } = req.body;
    console.log(admin_email)
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array();
        res.status(400).send({ message: alert })
    } else {
        const AdminData = await AdminModel.findOne({ where: { admin_email: admin_email } })
        if (AdminData) {

            await bcrypt.compare(password, AdminData.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    const adminPayload = {
                        admin_kode: AdminData.admin_kode,
                        admin_email: AdminData.admin_email
                    }
                    var privateKey = fs.readFileSync('private.key');
                    const tokenAdmin = jwt.sign(adminPayload, privateKey, { algorithm: 'HS256' });
                    console.log(tokenAdmin);
                    res.status(200).cookie("adminToken", tokenAdmin, {
                        httpOnly: true
                    }).send({ status: 200, message: 'Berhasil Login', tokenAdmin })
                } else {
                    res.status(400).send({ status: 400, message: "Wrong Password" })
                }
            });
        } else {
            res.status(400).send({ message: "Admin Tidak Di temukan !" });
        }
    }
}

/* Auth Loggedin */
exports.IsLoggedin = async (req, res) => {
    try {
        const token = req.cookies.adminToken;
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
/* End Auth Loggedin */

/* Logout Admin */
exports.LogoutAdmin = async (req, res) => {
    const token = req.cookies.adminToken;
    if (token) {
        res.cookie("adminToken", "", {
            httpOnly: true,
            expires: new Date(0)
        }).send({ message: 'Success Logout' });
    } else {
        res.status(500).send({ message: "Token Tidak Ditemukan" });
    }
}
/* End Logout Admin */

/** Get Current My Data */
exports.GetCurrentData = async (req, res) => {
    const token = req.cookies.adminToken;
    console.log(token)
    const payload = jwt_decode(token)
    await AdminModel.findOne({ where: { admin_email: payload.admin_email } })
}
//===========================================================================//
//=============================== Tugas API ==============================//
//============================================================================//
/**Get All Task Data */
exports.GetAllTugas = async (req, res) => {
    const token = req.cookies.adminToken;
    if (!token) return res.status(401).send({ message: "Unautorize Admin" });

    const AllTugas = await AllTaskModel.findAll({})
    if (AllTugas) {
        res.status(200).json(AllTugas);
    } else {
        res.status(404).send({ message: "Data Tidak Ditemukan" });
    }

}
/**End Get All Task Data */
/**Create New Tugas */
var imageTask = Upload.fields([{ name: 'image_tugas', maxCount: 1 }])
exports.CreateTask = async (req, res) => {
    imageTask(req, res, (err) => {
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
            const token = req.cookies.adminToken
            if (token) {
                const { filename } = req.files.image_tugas[0]
                const { judul_tugas, kategori_tugas, no_tlp_pedagang, cost_task, deskripsi_tugas, misi_tugas, link_tugas } = req.body
                const GenKeyNum = Num.randomIntWithin(10, 999999)
                const AddTask = new AllTaskModel({
                    image_tugas: filename,
                    kategori_tugas: kategori_tugas,
                    judul_tugas: judul_tugas,
                    no_tlp_pedagang: no_tlp_pedagang,
                    cost_task: cost_task,
                    deskripsi_tugas: deskripsi_tugas,
                    misi_tugas: misi_tugas,
                    link_tugas: link_tugas,
                    unique_code: GenKeyNum,
                    taskId: judul_tugas,
                    daftarTugaId: judul_tugas,
                    vipListId: kategori_tugas
                })
                AddTask.save()
                    .then(result => {
                        res.status(200).send({ message: `Berhasil Menambah Data Tugas Baru ${judul_tugas}` })
                    }).catch(err => {
                        console.log(err)
                    })
            }
        }
    })
}
/**End Create New Tugas */

/** Delete Tugas */
exports.DeleteTask = async (req, res) => {
    const { id } = req.body;
    const FindID = await AllTaskModel.findOne({ where: { id } })
    if (!FindID) {
        res.status(401).send({ message: "Data Tidak Di Temukan" });
    } else {

        await AllTaskModel.destroy({ where: { id: id } }).then(data => {
            if (data) {
                res.status(200).send({ message: `Tugas ${FindID.unique_code} Berhasil Di Hapus` });
            }
        }).catch(err => {
            res.status(500).send({ message: `Error : ${err}` })
        })
    }

}
/** End Delete Tugas */

/** Create Daftar Vendor Tugas */
var ImageIcon = Upload.fields([{ name: 'icon_kategori', maxCount: 1 }])
exports.CreateDaftarTugas = async (req, res) => {
    ImageIcon(req, res, (err) => {
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
            const token = req.cookies.adminToken
            if (token) {
                const { filename } = req.files.icon_kategori[0]
                const { title_kategori } = req.body
                const AddedVendor = new DaftarVendor({
                    image_ketegori: filename,
                    title_kategori: title_kategori
                })
                AddedVendor.save().then(result => {
                    res.status(200).send({ message: `Berhasil Menambah ${result.title_kategori}` });
                }).catch(err => {
                    console.log(err)
                    res.status(500).send({ message: `Error Data : ${err}` });
                })
            }
        }
    })
}
/** End Create Daftar Vendor Tugas */

/** Get All Data Vendor */
exports.GetDaftarVendor = async (req, res) => {
    const token = req.cookies.token;
    if (token) {
        const AllVendorTask = await DaftarVendor.findAll({})
        console.log(AllVendorTask)
        if (AllVendorTask) {
            res.status(200).json(AllVendorTask);
        }
    } else {
        res.status(401).send({ message: "Unautorize" });
    }
}
/** End Get All Data Vendor */
/**Create New Vip */
exports.CreateNewVip = async (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array();
        res.status(404).send({ message: alert })
    } else {
        const { vip_name, tugas_per_hari, color_block, per_pesanan, per_bulan, per_hari, per_tahun, harga_vip } = req.body;
        let InsertVip = new VipData({
            vip_name,
            tugas_per_hari,
            color_block,
            per_pesanan,
            per_pesanan,
            per_bulan,
            per_hari,
            per_tahun,
            harga_vip
        })
        await InsertVip.save()
            .then(result => {

                if (result) {
                    res.status(200).send({ message: `Berhasil Menambah ${result.vip_name}` })
                } else {
                    res.status(409).send({ message: `Tidak Dapat Tambah Data` })
                }
            }).catch(err => {
                console.log(err)
                res.status(409).send({ message: `Error Data : ${err}` })
            })
    }

}
/**End Create New Vip */

//===========================================================================//
//=============================== Penarikan Dana User ==============================//
//============================================================================//
exports.GetAllRequestPenarikan = async (req, res) => {
    const token = req.cookies.adminToken;
    const { type } = req.params
    if (token) {
        const Request = await RequestPenarikanDana.findAll({
            where: { status_transaksi: type },
            include: [{
                model: UserModel
            }]

        })
        if (Request.length > 0) {
            res.status(200).json(Request);
        }
        if (Request.length === 0) {
            res.status(404).send({ message: "Data Tidak Di Temukan" });
        }
    } else {
        res.status(401).send({ message: "Unautorize" });
    }
}


/** Get All VIp Data */
exports.GetAllVIP = async (req, res) => {
    const GetVIP = await VipData.findAll({})
    if (GetVIP) {
        res.status(200).json(GetVIP);
    } else {
        res.status(404).send({ message: `Data Not Found` })
    }
}
/** End Get All VIp Data */


// * Get All User Request Topup
exports.GetAllUserTopupData = async (req, res) => {
    const UserTopup = await SelfPayment.findAll({});
    console.log(UserTopup);
    if (UserTopup) {
        res.status(200).json(UserTopup);
    } else {
        res.status(400).json(false);
    }
}




