let express = require('express')
let userModol= require('../modols/userModol')
module.exports = {
    //前台的页面
    getIdexPage(req, res) {
        res.render('index')
    },
    getDetilPage(req, res) {
        res.render('detail')
    },
    getListPage(req, res) {
        res.render('list')
    },

    //后台页面
    getAdminIndexPage(req, res) {
        res.render('admin/index')
    },
    getNavPage(req, res) {
        res.render('admin/nav-menus')
    },
    getCategoriesPage(req, res) {
        res.render('admin/categories')
    },
    getCommentsPage(req, res) {
        res.render('admin/comments')
    },
    getPostsPage(req, res) {
            res.render('admin/posts')
    },
    getPostAddPage(req, res) {
        res.render('admin/post-add')
    },
    getUsersPage(req, res) {
        res.render('admin/users')
    },
    getSlidesPage(req, res) {
        res.render('admin/slides')
    },
    getSettingsPage(req, res) {
        res.render('admin/settings')
    },
    getProfilePage(req, res) {
        res.render('admin/profile')
    },
    getLogin(req, res) {
        res.render('admin/login')
    },
    getPasswordResetPage(req, res) {
        res.render('admin/password-reset')
    }
}