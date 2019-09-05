let express = require('express')


let app = express()
app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000")
})
// 托管静态资源
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
//设置ejs引擎
app.set('view engine','ejs')
app.set('views',__dirname+'/views')


app.get('/',(req,res)=>{
    res.render('index')
})