let postsModol = require('../modols/postsModol')

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
        console.log(obj)
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
    }
}