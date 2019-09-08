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
    }
}