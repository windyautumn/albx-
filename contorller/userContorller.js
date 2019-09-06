let userModol = require('../modols/userModol')

module.exports = {
    login(req, res) {
        let obj = req.body
        let email = obj.email
        // console.log(email)
        userModol.login(email, (err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    des: '服务器异常'
                })
            } else {
                if (data) {
                    if (data.password === obj.password) {
                        // res.json({
                        //     code:200,
                        //     des:'登录成功'
                        // })
                        //用cookie来处理状态保持
                        // res.writeHeader(200,{
                        //     'Set-Cookie':'isLogin=true'
                        // })
                        //用session的方法处理状态保持
                        req.session.isLogin = 'true'
                        req.session.userDate = data
                        res.end(JSON.stringify({
                            code: 200,
                            des: '登录成功'
                        }))

                    } else {
                        res.json({
                            code: 400,
                            des: '密码输入错误'
                        })
                    }
                } else {
                    res.json({
                        code: 400,
                        des: '邮箱输入错误'
                    })
                }
            }
        })
    },
    loginOut(req,res){
        req.session = ''
        res.json({
            code:200,
            des:'退出登录'
        })
    }
}