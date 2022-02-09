/* 햄버거 버튼 */
$(".ham-btn").click(function(){
    $(".mobile").stop().slideToggle();
})

$(".menu>ul>li").hover(function(){
    $(this).find(".subnav").stop().slideDown('fast');
}, function(){
    $(this).find(".subnav").stop().slideUp('fast');
})