$(document).ready(function(){
    var num,
        win_height,
        vod_i,
        section1_timer,
        section3_left; 
    
    win_height = $(window).height();
    num = 0;
    vod_i = 0;
    img_i_1 = 0;
    img_i_2 = 0;

    aa()
    vod()
    AOS.init()

    //section1 비디오
    section1_timer = setInterval(function(){
        vod_i++;
        vod_i = vod_i % 2;
        vod()
    },6000)

    function vod(){
        $(".video").eq(vod_i).stop().fadeIn(1000);
        $(".video").not($(".video").eq(vod_i)).stop().fadeOut(1000);

        //현재재생시간 세팅
        $(".video" + vod_i).get(0).currentTime= 0
        //비디오 플레이
        $(".video" + vod_i).get(0).play()
    }

    //스크롤탑 함수
    function aa(){
        win_height = $(window).height();
        
        if(num == 4){
            //footer만 보이게
            $("html").stop().animate({scrollTop:win_height*3+200},1000)
        }else{
            $("html").stop().animate({scrollTop:win_height*num},1000, header_color)
        }
    }

    //상단 서브메뉴 함수
    $(".gnb>ul").hover(function(){
        $(".subnav, .gnbbg").stop().slideDown()
    },function(){
        $(".subnav, .gnbbg").stop().slideUp()
    }) 
    //상단 배경색 함수
    function header_color(){
        if(num == 0){
            $(".header").removeClass("on")

        }else{
            $(".header").addClass("on")
        }
    }

    // 마우스휠
    $("html").on("mousewheel", function(event){
        delta = event.originalEvent.wheelDelta;
        moving = $("html").is(":animated");

        console.log(delta);

        if(delta < 0 && num<4 && !moving){
            num++;
            aa();
        }else if(delta>0 && num >0 && !moving){
            num--;
            aa();
        }

    })

    //전체 마우스휠에 기본 스크롤 이벤트 없앰
    $("*").on("mousewheel", function(event){
        event.preventDefault()
    })
})

//섹션4: 자동차스펙
a = 0
$(".section4 .btn-next").click(function(){
    a = a + 1
    a = a % 4
    console.log("click")
    $(".section4 .item-img").stop().fadeOut(300)
    $(".section4 .item-img").eq(a).stop().fadeIn(0)
})
$(".section4 .btn-prev").click(function(){
    a = a - 1
    a = a % 4
    console.log("click")
    $(".section4 .item-img").stop().fadeOut(300)
    $(".section4 .item-img").eq(a).stop().fadeIn(0)
})