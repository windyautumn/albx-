let express = require('express')
let pageContorller = require('./contorller/pageContorller')
let userContorller = require('./contorller/userContorller')
let postsContorller = require('./contorller/postsContorller')
let cateContorller = require('./contorller/cateContorller')
let uploadContorller = require('./contorller/uploadContorller')
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
//上传新的文章
.post('/addPage',postsContorller.addPage)
//获取所有分类选项
.get('/getAllCate',cateContorller.getAllCate)
//文件上传
.post('/uploadFile',uploadContorller.uploadFile)
module.exports = router