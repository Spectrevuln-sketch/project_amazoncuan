const { check, validationResult } = require('express-validator');
const User = require('../models/userModel');
const Admin = require('../models/AdminModel');

exports.validate = (method) => {
  switch (method) {
    /* Validate user Register Page */
    case 'user_login': {
      return [
        check('no_tlp')
          .notEmpty().withMessage('No Telepon Harus Di isi !')
          .isLength({ min: 3 }).withMessage('Minimal 3 Karakter !'),

        check('password')
          .isLength({ min: 5 }).withMessage('Password Minimal 5 Karakter !')
          .notEmpty().withMessage('Password tidak boleh kosong !'),

      ]
    }
  }
  switch (method) {
    /* Validate user Register Page */
    case 'user_register': {
      return [
        check('no_tlp')
          .notEmpty().withMessage('No Telepon Harus Di isi !')
          .isLength({ min: 3 }).withMessage('Minimal 3 Karakter !')
          .custom(user => {
            return User.findOne({ where: { no_tlp: user } }).then(result => {
              if (result) {
                return Promise.reject('Username Already In Use');
              }
            })
          }),
        check('password1')
          .isLength({ min: 5 }).not().withMessage('Password Minimal 5 Karakter !')
          .notEmpty().withMessage('Password tidak boleh kosong !'),
        check('password2')
          .isLength({ min: 5 }).not().withMessage('Password Minimal 5 Karakter !')
          .notEmpty().withMessage('Konfrimasi Password Tidak Boleh Kosong !')
          .custom(((password2, { req }) => {
            if (password2 !== req.body.password1) {
              throw new Error('Password Tidak Sama!')
            }
            return true;
          }))
      ]
    }

  }
  switch (method) {
    /* Validate user Register Page */
    case 'edit_password': {
      return [
        check('sandi_baru')
          .isLength({ min: 5 }).not().withMessage('Password Minimal 5 Karakter !')
          .notEmpty().withMessage('Password tidak boleh kosong !'),
        check('konfrim_sandi')
          .isLength({ min: 5 }).not().withMessage('Password Minimal 5 Karakter !')
          .notEmpty().withMessage('Konfrimasi Password Tidak Boleh Kosong !')
          .custom(((password2, { req }) => {
            if (password2 !== req.body.password1) {
              throw new Error('Password Tidak Sama!')
            }
            return true;
          }))
      ]
    }
  }
  switch (method) {
    case 'admin_register': {
      return [
        check('admin_email').notEmpty().withMessage('No Telepon Harus Di isi !')
          .isLength({ min: 3 }).withMessage('Minimal 3 Karakter !')
          .custom(admin => {
            return Admin.findOne({ where: { admin_email: admin } }).then(result => {
              if (result) return Promise.reject('Email Already Register')
            })
          }),
        check('admin_name').notEmpty().withMessage('Nama Tidak Boleh Kosong !'),
        check('password').notEmpty().withMessage('Password Tidak Boleh Kosong !')
          .isLength({ min: 4 }).withMessage('Password Minimal 4 karakter')
          .isAlphanumeric().withMessage('Password Harus Berupa Alphanumeric')
      ]
    }
  }

  switch (method) {
    case 'admin_login': {
      return [
        check('admin_email')
          .notEmpty().withMessage('Email Tidak Boleh Kosong !')
          .custom(admin => {
            return Admin.findOne({ where: { admin_email: admin } }).then(result => {
              if (!result) return Promise.reject('Email Belum Terregistrasi !')
            })
          }),
        check('password')
          .isLength({ min: 5 }).withMessage('Password Minimal 5 Karakter !')
          .notEmpty().withMessage('Password tidak boleh kosong !'),

      ]
    }
  }

  switch (method) {
    case 'daftar_vendor_tugas': {
      return [
        check('title_kategori')
          .notEmpty().withMessage('Title Kategori Tidak Boleh Kosong')
      ]
    }
  }

  switch (method) {
    case 'create-new-vip': {
      return [
        check('vip_name')
          .notEmpty().withMessage('Nama Vip Tidak Boleh Kosong'),

        check('tugas_per_hari')
          .notEmpty().withMessage('Tugas perhari harap di isi')
      ]
    }
  }
  switch (method) {
    case 'update_rekening': {
      return [
        check('namabank')
          .notEmpty().withMessage('Nama Bank Tidak Boleh Kosong'),

        check('rekening')
          .notEmpty().withMessage('rekening harap di isi')
      ]
    }
  }



}