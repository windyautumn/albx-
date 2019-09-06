$(function () {
    $.ajax({
        type: 'get',
        url: '/getAllPosts',
        success: function (res) {
            console.log(res);

        }
    })





})