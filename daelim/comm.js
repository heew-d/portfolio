    /*메인메뉴 서브메뉴*/
    $(".container-full .main-li").mouseenter(function () {
        $(this).find(".sub-ul").stop().slideDown()
    })
    $(".container-full .main-li").mouseleave(function () {
        $(this).find(".sub-ul").stop().slideUp()
    })
    /*햄버거버튼을 눌럿을때*/
    $(".ham-btn").click(function () {
        $(".mobile-menu").stop().slideToggle()
    })
	
    /*모바일 메뉴일때*/
    $(".mobile-menu .main-li").click(function () {
        $(this).find(".sub-ul").stop().slideToggle()
    })

