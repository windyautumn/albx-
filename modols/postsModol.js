let mysql = require('mysql')
let conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'baixiu',
    dateStrings:true
})



module.exports={
    getAllPosts(callback){
        let sql = `select posts.*,users.nickname,categories.name
        from posts,users,categories
        where posts.user_id = users.id and posts.category_id = categories.id`
        conn.query(sql,(err,data)=>{
            if(err) callback(err)
            callback(null,data)
        })
    }
}