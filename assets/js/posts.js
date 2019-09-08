$(function(){
    $.ajax({
        type:'get',
        url:'/getAllPosts',
        datatype:'json',
        success:function(res){
            let html = template('postsAll',res)
            $('tbody').html(html)
        }
    })




})