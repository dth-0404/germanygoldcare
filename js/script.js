$('.text-ques').eq(2).slideDown('slow');
$('.text-ques').eq(2).attr('data-status', 'block');
$('.list-ques li').each(function (index) {
    $(this).click(function () {
        var data = $(this).attr('data-ques');
        $('.text-ques').each(function () {
            var id = $(this).attr('id');
            if (id == data) {
                var status = $(this).attr('data-status');
                if (status == 'block') {
                    $(this).slideUp('slow');
                    $(this).attr('data-status', 'none')
                } else if (status == 'none') {
                    $('.text-ques').slideUp('slow');
                    $(this).slideDown('slow');
                    $('.text-ques').each(function () {
                        $(this).attr('data-status', 'none')
                    });
                    $(this).attr('data-status', 'block')
                }
            }
        })
    })
});
$('.navbar-bar').click(function () {
    $('.navbar-content').addClass('show-navbar');
    $('.navbar-content').removeClass('hide-navbar')
})
$('.navbar-close').click(function () {
    $('.navbar-content').removeClass('show-navbar');
    $('.navbar-content').addClass('hide-navbar')
});
$('.icon-modal').click(function () {
    console.log('click');
    $('#myModal').modal('hide')
})
$('.btn-blog').click(function () {
    $('.btn-blog').removeClass('active-btn');
    $(this).addClass('active-btn');
    var data = $(this).attr('data-sidebar');
    $('.single-sidebar-widget').hide();
    $('html').find('.single-sidebar-widget#' + data).show()
});
$('.list-number-blog li').each(function () {
    $(this).click(function () {
        $('.list-number-blog li').removeClass('active');
        $(this).addClass('active')
    })
});
var btn = $('#button_scroll_top');
$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        btn.addClass('show')
    } else {
        btn.removeClass('show')
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300')
})
function validate(evt) {
    var theEvent = evt || window.event; if (theEvent.type === 'paste') { key = event.clipboardData.getData('text/plain'); } else { var key = theEvent.keyCode || theEvent.which; key = String.fromCharCode(key); }
    var regex = /[0-9()]|\+/; if (!regex.test(key)) { theEvent.returnValue = false; if (theEvent.preventDefault) theEvent.preventDefault(); }
};

