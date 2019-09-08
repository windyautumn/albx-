let mysql = require('mysql')
let conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'baixiu',
    dateStrings:true
})


module.exports={
    getAllCate(callback){
        let sql = `select * from categories`
        conn.query(sql,(err,data)=>{
            if(err) callback(err)
            callback(null,data)
        })
    }
}