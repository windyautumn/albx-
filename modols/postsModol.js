let mysql = require('mysql')
let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'baixiu',
    dateStrings: true
})



module.exports = {
    getAllPosts(obj, callback) {
        console.log(obj)
        let sql = `select posts.*,users.nickname,categories.name
        from posts
        join users on posts.user_id = users.id
        join categories on posts.category_id = categories.id
        where 1 = 1  `
        if (obj.cate && obj.cate != 'all') {
            sql += ` and posts.category_id =${obj.cate}`
        }
        if (obj.status && obj.status != 'all') {
            sql += ` and posts.status = '${obj.status}'`
        }
        sql += ` order by id desc
        limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`
        // let sql = `select posts.*,users.nickname,categories.name
        // from posts
        // join users on posts.user_id = users.id
        // join categories on posts.category_id = categories.id
        // where 2 = 2 `
        // if(obj.cate && obj.cate != 'all'){ // 说明用户进行了分类的选择，那么就应该拼接分类条件
        //     sql += ` and posts.category_id = '${obj.cate}'`
        // }
        // if(obj.status && obj.status != 'all'){ // 说明用户选择了状态条件
        //     sql += ` and posts.status = '${obj.status}'`
        // }

        // sql +=  ` order by id DESC
        //         limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`
        // console.log(sql)
        conn.query(sql, (err, data) => {
            if (err) callback(err)
            // callback(null,data)
            // 获取总页数
            sql = `select count(*) as total from posts where 1=1`
            if (obj.cate && obj.cate != 'all') {
                sql += ` and posts.category_id =${obj.cate}`
            }
            if (obj.status && obj.status != 'all') {
                sql += ` and posts.status = '${obj.status}'`
            }
            conn.query(sql, (err1, data1) => {
                if (err1) callback(err1)
                callback(null, { data, numb: data1[0].total })
            })
        })
    }
}