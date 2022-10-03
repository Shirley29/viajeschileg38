$(function() {
$('[data-bs-toggle="tooltip"]').tooltip();
});

$(document).scroll(function(){
    const y = $('html').scrolltop();
    y > 300 ? $('nav').addclass('nav-black'): $ ('nav').removeclass('navblack')
})