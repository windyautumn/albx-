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
    },
    getAllPosts(callback){
        let sql = `select posts.*,users.nickname,categories.name
        from posts,users,categories
        where posts.user_id = users.id and posts.category_id = categories.id`
        conn.query(sql,(err,data)=>{
            if(err) callback(err)
            console.log(data)
            callback(null,data)
        })
    }
}