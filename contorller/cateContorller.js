let cateMolol = require('../modols/cateMolol')
module.exports={
    getAllCate(req,res){
        cateMolol.getAllCate((err,data)=>{
            if(err) res.json({
                code:400,
                des:'获取数据失败'
            })
            res.json({
                code:200,
                des:'获取成功',
                data
            })
        })
    }
}