/* 동영상재생 */
$(".play").click(function(){
    $(".video").css({display:"block"})
    $("#media img").css({display:"none"})
    $(".play").css({display:"none"})
})

/* 인디케이트 */
a = 0
$(".btn-next").click(function(){
    a = a+1
    a = a%7
    $("#main .item").stop().fadeOut(1000)
    $("#main .item").eq(a).stop().fadeIn(1000)
    $("#main .indicator .indi").css({backgroundColor:"transparent"})
    $("#main .indicator .indi").eq(a).css({backgroundColor:"white"})
})
$(".btn-prev").click(function(){
    a = a-1
    a = a%7
    $("#main .item").stop().fadeOut(1000)
    $("#main .item").eq(a).stop().fadeIn(1000)
    $("#main .indicator .indi").css({backgroundColor:"transparent"})
    $("#main .indicator .indi").eq(a).css({backgroundColor:"white"})
})

n=0
$(".indi").click(function(){
    n = $(this).index()
    console.log("출력 : " + n)
    $("#main .item").stop().fadeOut(1000)
    $("#main .item").eq(n).stop().fadeIn(1000)
    $(".indi").css({backgroundColor:"transparent"})
    $(".indi").eq(n).css({backgroundColor:"white"})
})

