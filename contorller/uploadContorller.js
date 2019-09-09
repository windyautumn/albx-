//这是上传文件的控制器
let path = require('path')
let formidable = require('formidable')



module.exports={
    uploadFile(req,res){
        // 1.创建formidable对象
        let form = new formidable.IncomingForm()
        //2.设置编码
        form.encoding = 'utf-8'
        //3.设置存储上传文件的目录
        form.uploadDir = __dirname +'/../uploads'
        //4.设置是否保留上传的文件的扩展名
        form.keepExtensions = true
        //5.调用parse方法实现文件上传
        form.parse(req,(err,fields,files)=>{
            // console.log(fields)
            // console.log(files)
            if(err) res.json({
                code:400,
                des:'上传失败'
            })
            res.json({
                code:200,
                des:'上传成功',
                img:path.basename(files.myimg.path)
            })
        })
    }
}