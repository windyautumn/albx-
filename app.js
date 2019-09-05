let express = require('express')


let app = express()
app.listen(3001,()=>{
    console.log("http://127.0.0.1:3001")
})
app.set('view engine','ejs')



app.get('/',(req,res)=>{
    
})