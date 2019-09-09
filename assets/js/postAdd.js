$(function(){
    //引入富文本
    CKEDITOR.replace('content')


    $('.btnAdd').on('click',function(){
        //将富文本中的内容同步
        CKEDITOR.instances.content.updateElement()
        $.ajax({
            type:'post',
            url:'/addPage',
            data:$('form').serialize(),
            datatype:'json',
            success:function(res){
                $('.alert-danger > span').text(res.des)
                $('.alert-danger').fadeIn(200).delay(2000).fadeOut(200)
                if(res.code == 200){
                   setTimeout(() => {
                    location.href = '/admin/posts'
                   }, 2400);
                }
            }
        })



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

    //获取所有分类
    $.ajax({
        type:'get',
        url:'/getAllCate',
        success:function(res){
            // console.log(res)
            let str = '<option value="all">所有分类</option>'
            res.data.forEach(function(item,index){
                str += `<option value="${item.id}">${item.name}</option>`
            })
            $('#category').html(str)
        }
    })



})