var express = require('express');
var router = express.Router();
var AdminController = require('../controllers/AdminController')
var corsConfig = require('../config/corsConf');
var cors = require('cors')
var Validate = require('../config/validation');
const AdminModel = require('../models/AdminModel');

/* Admin Register */
router.post('/create_admin', cors(corsConfig.option), Validate.validate('admin_register'), AdminController.RegisterAdmin);
/* Admin Login */
router.post('/admin_login', cors(corsConfig.option), Validate.validate('admin_login'), AdminController.AuthLogin);
/* Get All My Team */
router.post('/get_my_team', cors(corsConfig.option), AdminController.GetAllTeam);
/** Get My Data */
router.get('/current_admin', cors(corsConfig.option), AdminController.GetCurrentData);
/** Get All Data Task  */
router.get('/get-allTugas', cors(corsConfig.option), AdminController.GetAllTugas);
//============================ Management Tugas Menu ===============================
/**Create New Tugas */
router.post('/create-new-task', cors(corsConfig.option), AdminController.CreateTask);
/** Delete Tugas */
router.post('/delete-tugas', cors(corsConfig.option), AdminController.DeleteTask);
/** Create Daftar Vendor Tugas */
router.post('/create-daftar-vendor-task', cors(corsConfig.option), AdminController.CreateDaftarTugas)
/** End Create Daftar Vendor Tugas */
/** Create Daftar Vendor */
router.get('/daftar-tugas', cors(corsConfig.option), AdminController.GetDaftarVendor);
/** End Create Daftar Vendor */
/** Create Daftar Vip */
router.post('/create-new-vip', cors(corsConfig.option), AdminController.CreateNewVip);
/** End Create Daftar Vip */

//============================ Request Penarikan Dana ===============================
/* Get data request */
router.get('/get-all-user-request/:type', cors(corsConfig.option), AdminController.GetAllRequestPenarikan)
/* End Get data request */
//============================ Auth Context ===============================
router.get('/isLogin', cors(corsConfig.option), AdminController.IsLoggedin);
router.get('/logoutAdmin', cors(corsConfig.option), AdminController.LogoutAdmin);

//============================ Global Context ===============================
router.get('/get-all-vip-data', cors(corsConfig.option), AdminController.GetAllVIP);

// ? Api Get All User  Pay
router.get('/get-all-user-topup', cors(corsConfig.option), AdminController.GetAllUserTopupData)






module.exports = router;
