let mysql = require('mysql')
let conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'baixiu'
})
module.exports={
    login(email,callback){
        // let email = obj.email
        // console.log(obj)
        let sql = 'select * from users where email =?'
        conn.query(sql,[email],(err,data)=>{
            if(err) callback(err)
            callback(null,data[0])
        })
    }
}