$(function () {
    let str = location.href
    //判断是否有? 即是否有参数
    let index = str.indexOf('?')
    let routername = ''
    if (index != -1) {
        routername = str.substring(str.lastIndexOf('/' + 1, index))
    } else {
        routername = str.substring(str.lastIndexOf('/') + 1)
    }
    console.log(routername)
    //判断路由
    if (routername == 'posts' || routername == 'postAdd' || routername == 'categories') {
        $('#menu-posts').addClass('in')
        $('#menu-posts').attr('aria-expanded', true)
    } else if (routername == 'navMenus' || routername == 'slides' || routername == 'settings') {
        $('#menu-settings').addClass('in')
        $('#menu-settings').attr('aria-expanded', true)
    }
    $('#'+routername).addClass('active')
    $('#'+routername).parent().siblings('a').removeClass('collapsed')


    // $('#'+routername).addClass('active')
    // $('#'+routername).parent().siblings('a').removeClass('collapsed')





})