let express = require('express')
let pageConeorller = require('./contorller/pageConeorller.js')
let router = express.Router()
//前台的页面
router.get('/',pageConeorller.getIdexPage)
.get('/detail',pageConeorller.getDetilPage)
.get('/list',pageConeorller.getListPage)


//登录页面
.get('/login',pageConeorller.getLogin)



//后台页面

.get('/admin',pageConeorller.getAdminIndexPage)
.get('/admin/navMenus',pageConeorller.getNavPage)
.get('/admin/categories',pageConeorller.getCategoriesPage)
.get('/admin/comments',pageConeorller.getCommentsPage)
.get('/admin/posts',pageConeorller.getPostsPage)
.get('/admin/postAdd',pageConeorller.getPostAddPage)
.get('/admin/users',pageConeorller.getUsersPage)
.get('/admin/slides',pageConeorller.getSlidesPage)
.get('/admin/settings',pageConeorller.getSettingsPage)
.get('/admin/profile',pageConeorller.getProfilePage)
.get('/admin/passwordReset',pageConeorller.getPasswordResetPage)
module.exports = router