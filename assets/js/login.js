$(function () {
    $('.btnlogin').on('click', function () {
        let email = $('#email').val()
        let password = $('#password').val().trim()
        if (!/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(email)) {
            $('.alert-danger').fadeIn(200).delay(2000).fadeOut(200)
            $('.alert-danger >span').text('请输入正确格式的邮箱')
        }
        if(password.length <6 ||password.length >16){
            $('.alert-danger').fadeIn(200).delay(2000).fadeOut(200)
            $('.alert-danger >span').text('请输入6--16位的密码')
        }
        $.ajax({
            type:'post',
            url:'/login',
            data:$('form').serialize(),
            datatype:'json',
            success:function(res){
                // console.log(typeof res)
                let code = JSON.parse(res).code
                if(code == 200){
                    // console.log(123)
                    location.href='/admin'
                }
            }
        })
    })


})