let express = require('express')
let pageContorller = require('./contorller/pageContorller')
let userContorller = require('./contorller/userContorller')
let postsContorller = require('./contorller/postsContorller')
let router = express.Router()
//前台的页面
router.get('/',pageContorller.getIdexPage)
.get('/detail',pageContorller.getDetilPage)
.get('/list',pageContorller.getListPage)


//登录页面
.get('/login',pageContorller.getLogin)
.post('/login',userContorller.login)


//后台页面

.get('/admin',pageContorller.getAdminIndexPage)
.get('/admin/navMenus',pageContorller.getNavPage)
.get('/admin/categories',pageContorller.getCategoriesPage)
.get('/admin/comments',pageContorller.getCommentsPage)
.get('/admin/posts',pageContorller.getPostsPage)
.get('/admin/postAdd',pageContorller.getPostAddPage)
.get('/admin/users',pageContorller.getUsersPage)
.get('/admin/slides',pageContorller.getSlidesPage)
.get('/admin/settings',pageContorller.getSettingsPage)
.get('/admin/profile',pageContorller.getProfilePage)
.get('/admin/passwordReset',pageContorller.getPasswordResetPage)
//退出登录
.get('/loginOut',userContorller.loginOut)
//获取所有文章
.get('/getAllPosts',postsContorller.getAllPosts)
module.exports = router