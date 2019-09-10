let postsModol = require('../modols/postsModol')
let moment = require('moment')
module.exports={
    getAllPosts(req,res){
        let query = req.query
        // console.log(query)
        postsModol.getAllPosts(query,(err,data)=>{
            if(err) res.json({
                code:400,
                des:'获取数据失败'
            })
            res.json({
                code:200,
                des:'获取数据成功',
                data
            })
        })
    },
    addPage(req,res){
        //接收所有参数
        let obj = req.body
        obj.id = null
        obj.views = 0
        obj.likes = 0
        obj.user_id = req.session.userDate.id
        postsModol.addPage(obj,result =>{
            if(!result) res.json({
                code:400,
                des:'新增失败'
            })
            res.json({
                code:200,
                des:'新增成功'
            })
        })
    },
    getPostById(req,res){
        let id = req.query.id
        postsModol.getPostById(id,(err,data)=>{
            if(err) res.json({
                code:400,
                des:'获取数据失败'
            })
            data.created = moment(data.created).format('YYYY-MM-DDTHH:mm:ss')
            res.json({
                code:200,
                des:'获取数据成功',
                data
            })
        })
    },
    editPage(req,res){
        var obj = req.body
        postsModol.editPage(obj,result=>{
            if(!result) res.json({
                code:400,
                des:'编辑失败'
            })
            res.json({
                code:200,
                des:'编辑成功'
            })
        })
    }
}