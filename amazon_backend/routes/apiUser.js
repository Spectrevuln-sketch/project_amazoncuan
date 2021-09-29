var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');
const PaymentController = require('../controllers/PaymentController');
var corsConfig = require('../config/corsConf');
var cors = require('cors')
var Validate = require('../config/validation');
var Upload = require('../config/uploadFile');
//============================ Request API For User ===============================
/* Register user */
router.post('/create_user', cors(corsConfig.option), Validate.validate('user_register'), UserController.RegisterNewUser);
/* End Register user */
/* Login User */
/* End Login User */
router.post('/login_auth', cors(corsConfig.option), Validate.validate('user_login'), UserController.Login);
/* get Current User Data */
router.get('/current_user', cors(corsConfig.option), UserController.GetCurrentUser);
/* End get Current User Data */
/* Logout User */
router.get('/logout_auth', cors(corsConfig.option), UserController.Logout);
/* End Logout User */
/* Logout User */
router.post('/update_rekening', cors(corsConfig.option), Validate.validate('update_rekening'), UserController.UpdateRekening);
/* End Logout User */
/* Logout User */
router.post('/update_password', cors(corsConfig.option), Validate.validate('edit_password'), UserController.EditPassword);
/* End Logout User */
/* update sandi bank */
router.post('/update_sandi_bank', cors(corsConfig.option), UserController.EditPasswordBank);
/* End sandi bank */
/* update Detail User */
router.post('/update-user-detail', cors(corsConfig.option), UserController.DetailUser);
/* End Detail User */
router.get('/isLogin', cors(corsConfig.option), UserController.IsLogin);
/* Get All User Data */
router.get('/get-all-user', cors(corsConfig.option), UserController.GetAllDataUser);
/* Get All Data Affiliate */
// router.get('/get-all-affiliate', cors(corsConfig.option), UserController.GetAllAffiliate)
//============================ Request API payment For User ===============================
/* get All list of bank */
router.get('/getListBank', cors(corsConfig.option), PaymentController.getBankList);
/* End get All list of bank */
router.post('/pendding-topup', cors(corsConfig.option), UserController.PenddingTransaksiSelf)
/** Insert Data Pendding Topup */

//============================ User Data ===============================
/* Get Current Data Payment  */
router.get('/currentUserPay', cors(corsConfig.option), UserController.GetDataTopup)
/* End Get Current Data Payment  */
/* Kurangi Pendapatan */
router.post('/kurangiPendapatan', cors(corsConfig.option), UserController.KurangiPendapatan);
/* End Kurangi Pendapatan */
//============================ Task API ===============================
/* Get All Data Task */
router.get('/task-data', cors(corsConfig.option), UserController.GetAllTask)
/* End Get All Data Task */

/* Added New Task For Current User */
router.post('/addNewTask', cors(corsConfig.option), UserController.AddedTask);
/* End Added New Task For Current User */
/* insert task to database */
router.post('/insertTask', cors(corsConfig.option), UserController.InsertTask);
/* End insert task to database */
/* Get My Task */
router.get('/get_my_task', cors(corsConfig.option), UserController.GetMyCurrentTask)
/* End Get My Task */
router.get('/get_data_task', cors(corsConfig.option), UserController.GetDataTask);
/** Upload Task Data */

router.post('/uploadFileTask', cors(corsConfig.option), UserController.UploadTask);
/** End  Upload Task Data */
/**Check Task */
router.get('/get-tugas-as-vip/:id', cors(corsConfig.option), UserController.GetTaskAsVip);
/**End Check Task */

/** Get All Tugas As User Berhasil */
router.get('/get-tugas-user-berhasil', cors(corsConfig.option), UserController.GetTaskAsUserDone);
/** End Get All Tugas As User Berhasil */
/** Get All Tugas As User GAGAL */
router.get('/get-tugas-user-gagal', cors(corsConfig.option), UserController.GetTugasTidakBerhasil);
/** End Get All Tugas As User gagal */


///============================ Global Api For User ===============================
router.get('/gen-captcha', cors(corsConfig.option), UserController.GenCaptcha);
//============================ Dashbaord Data ===============================
router.get('/all-user-tugas', cors(corsConfig.option), UserController.GetAllCurrentTugas)
router.get('/all-vendor-data', cors(corsConfig.option), UserController.GetAllDaftarTugas)
router.get('/get-all-vip-level', cors(corsConfig.option), UserController.GetAllVipMaster)

//============================ Team Data ===============================
router.get('/team-data', cors(corsConfig.option), UserController.GetMyTeamData);






module.exports = router;
