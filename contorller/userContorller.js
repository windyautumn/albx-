let userModol = require('../modols/userModol')

module.exports={
    login(req,res){
        let obj = req.body
        let email = obj.email
        // console.log(email)
        userModol.login(email,(err,data)=>{
            if(err) {
                res.json({
                    code:400,
                    des:'服务器异常'
                })
            }else{
                if(data){
                    if(data.password === obj.password){
                        // res.json({
                        //     code:200,
                        //     des:'登录成功'
                        // })
                        res.writeHeader(200,{
                            'Set-Cookie':'isLogin=true'
                        })
                        res.end(JSON.stringify({
                            code:200,
                            des:'登录成功'
                        }))
                    }else{
                        res.json({
                            code:400,
                            des:'密码输入错误'
                        })
                    }
                }else{
                    res.json({
                        code:400,
                        des:'邮箱输入错误'
                    })
                }
            }
        })
    }
}