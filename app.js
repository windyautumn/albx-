let express = require('express')
let router = require('./router.js')
let bodyParser = require('body-parser')

let app = express()
app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000")
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// 托管静态资源
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
//设置ejs引擎
app.set('view engine','ejs')
app.set('views',__dirname+'/views')


app.use(router)