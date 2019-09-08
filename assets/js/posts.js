$(function(){
    //每页多少数据
    var pageSize = 2
    //当前页码
    var pageNum = 1
    init()

    function init(search){
        $.ajax({
            type:'get',
            url:'/getAllPosts',
            data:{
                pageNum,
                pageSize,
                ...search
            },
            datatype:'json',
            success:function(res){
                let html = template('postsAll',res.data)
                $('tbody').html(html)
                // 生成分页结构
                setpage(Math.ceil(res.data.numb/pageSize))
            }
        })
    }

    function setpage(totalPages){
        $('.pagination').bootstrapPaginator({
            bootstrapMajorVersion:3,
            currentpage:pageNum,
            totalPages,
            onPageClicked: function (event, originalEvent, type, page) {
                // page就是你所需要的当前页码，我们只需要将全局的页码值进行修改，再次发起ajax请求获取数据进行动态生成
                pageNum = page
                let search={}
                search.cate = $('.cate').val()
                search.status = $('.status').val()
                init(search)
            }
        })
    }
    // 获取所有分类项
    $.ajax({
        type:'get',
        url:'/getAllCate',
        success:function(res){
            // console.log(res)
            let str = '<option value="all">所有分类</option>'
            res.data.forEach(function(item,index){
                str += `<option value="${item.id}">${item.name}</option>`
            })
            $('.cate').html(str)
        }
    })
    //筛选功能
    $('.btn').on('click',function(){
        let search={}
        search.cate = $('.cate').val()
        search.status = $('.status').val()
        // console.log(search)
        init(search)
    })


})