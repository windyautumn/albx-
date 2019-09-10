$(function(){
    //引入富文本
    CKEDITOR.replace('content')
    // 获取url地址栏参数
    var str = location.search
    //将参数转换成对象
    var obj = {}
    str = str.substring(1)
    var arr1 = str.split('&')   
    arr1.forEach(function(item){
        var arr2 = item.split('=')
        obj[arr2[0]]=arr2[1]
    })
    var urlId = obj.id
    function opt(url){
        $.ajax({
            type:'post',
            url:url,
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
    }
    $('.btnAdd').on('click',function(){
        //将富文本中的内容同步
        CKEDITOR.instances.content.updateElement()
        if(urlId){
            opt('/editPage')
        }else{
            opt('/addPage')
        }



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
 
    //如果有参数就是编辑 先根据ID获取数据渲染
    if(urlId){
        $.ajax({
            type:'get',
            url:'/getPostById',
            data:{id:urlId},
            datatype:'json',
            success:function(res){
                // console.log(res)
                $('[name="id"]').val(res.data.id)
                $('#title').val(res.data.title)
                $('#content').val(res.data.content)
                $('#slug').val(res.data.slug)
                $('.thumbnail').attr('src','/uploads/'+res.data.feature).show()
                $('[name="feature"]').val(res.data.feature)
                $('#category').val(res.data.category_id)
                $('#created').val(res.data.created)
                $('#status').val(res.data.status)
            }
        })
    }

})