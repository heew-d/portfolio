/*메뉴*/
$(".gnb>ul>li").hover(function(){
    $(this).find(".subnav").stop().slideDown("fast")
}, function(){
    $(this).find(".subnav").stop().slideUp("fast")
})
/*모바일메뉴*/
$(".ham-btn").click(function(){
$(".mobile").stop().slideToggle('fast')
$("body").toggleClass("btn-on")
})
$(".m-menu>li").hover(function(){
$(this).find(".subnav").stop().slideDown("fast")
},function(){
$(this).find(".subnav").stop().slideUp("fast")
})
