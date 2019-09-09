$(function(){
    //引入富文本
    CKEDITOR.replace('content')


    $('.btnAdd').on('click',function(){
        //将富文本中的内容同步
        CKEDITOR.instances.content.updateElement()




    })
   //上传文件
    $('#feature').on('change',function(){
        let myfile = this.files[0]
        // console.log(myfile)
        let formdata = new FormData()
        formdata.append('myimg',myfile)
        $.ajax({
            type:'post',
            url:'/uploadFile',
            data:formdata,
            processData:false,
            contentType:false,
            datatype:'json',
            success:function(res){
                // console.log(res)
                if(res.code == 200){
                    $('.thumbnail').show().attr('src','/uploads/'+res.img)
                    $('[name="feature"]').val(res.img)

                }
            }
        })
    })




})