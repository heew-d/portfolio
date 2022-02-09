
//loading
let Isloader = document.querySelector(".loading_wrap");

function Isloading(){
    setTimeout(function(){
        Isloader.classList.add('active');
    },2000);
}
Isloading();

//menu
document.querySelectorAll(".nav ul li a").forEach(li => {
    li.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    })
})

$(".ham-btn").click(function(){
    $(".ham_wrap").toggleClass('active')
});
$(".m-menu ul li").click(function(){
    $(".ham_wrap").removeClass('active')
});

//section1 

//section2(about)
function about(){
    let scrollTop = (document.documentElement.scrollTop || window.pageYOffset || window.scrollX) + window.innerHeight / 2;

    const sect2 = document.getElementById('section2');
    const sec2 = document.querySelector(".sec2");

    if(scrollTop > sect2.offsetTop){
        sec2.classList.add("show");
    }
}
window.addEventListener('scroll', about);

//section2 (skill)
function count() {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;

    const sec2 = document.getElementById('section2');
    const skill = document.querySelector('.skill');
    const skillTop = sec2.offsetTop + skill.offsetTop - 150;
    const skillHeight = sec2.offsetTop + skill.offsetTop + skill.offsetHeight;

    if (scrollTop >= skillTop && scrollTop <= skillHeight) {
        const counters = document.querySelectorAll('.counter')

        counters.forEach(counter => {
            counter.innerText = '0'

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target')
                const c = +counter.innerText

                const increment = target / 300

                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`
                    setTimeout(updateCounter, 50)
                } else {
                    counter.innerText = target;
                }
            }
            updateCounter()
        })
        window.removeEventListener('scroll', count);
    }
}
window.addEventListener('scroll', count);


//section3 (cursor)
$(".pro_desc strong").mouseenter(function(){
    $(".cursor").addClass("over")
})
$(".pro_desc strong").mouseleave(function(){
    $(".cursor").removeClass("over")
})
$(window).mousemove(function(event){
    client_x = event.clientX;
    client_y = event.clientY;
    $(".cursor").css({left:client_x, top:client_y})
})


//section3 (number)
function getSectionPoint(){
    const section = document.querySelector("#section3");
    const sections = document.querySelectorAll(".project");
    const thisPoint = document.documentElement.scrollTop;

    for (let i=0; i<sections.length; i++){
        let number = 250; //margin-bottom

        //clientHeight : 엘리먼트의 내부 높이를 픽셀로 반환
        //getBoundingClientRect() : 소수점이 포함된 값 반환
        //Math.abs() : 주어진 숫자의 절대값을 반환
        if(thisPoint>= (section.offsetTop + sections[0].offsetTop) && thisPoint <= (section.offsetTop + section.clientHeight)){
            let point = sections[0].offsetTop + Math.abs(sections[0].getBoundingClientRect().top);
            const num = document.querySelectorAll('.num');

            if((sections[i].offsetTop - number) <= point){
                if(Number(num[i].textContent)>1){
                    sections[i - 1].classList.remove('active');
                    sections[i].classList.add('active');
                }else{
                    sections[i].classList.add('active');
                }
            }else{
                sections[i].classList.remove('active');
            }
        }
    }
}
window.addEventListener('scroll', getSectionPoint)


//section4
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    // 요소의 상단 부분에서의 거리 좌표를 뺌
    let offset = scrollTop - $("#section4").offset().top;

    if(scrollTop > $("#section4").offset().top){
        $("#section4 .sec4 .javascriptCont").css("left", -offset)
    }
});
//section4 (헤더, 메뉴 컬러 체인지)
function changeColor(){
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop || window.screenY;
    const sec4 = document.getElementById('section4')
    const sec5 = document.getElementById('section5')

    const header = document.getElementById('header')

    const changeHeight = sec4.offsetTop + sec4.offsetHeight + sec5.offsetHeight;

    if(scrollTop >= sec4.offsetTop && scrollTop <= changeHeight){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
}
window.addEventListener("scroll", changeColor)

//section4 (calculator)
let outputScreen = document.getElementById('output-screen');

function display(num){ //결과 보여주는 함수
    outputScreen.value += num;
}
function Calculate(){ // = 연산
    //eval : 문자로 표현 된 JavaScript 코드를 실행하는 함수
    try{
        outputScreen.value = eval(outputScreen.value);
    } catch (err){
        alert("Invalid")
    }
}
function Clear(){ //초기화
    outputScreen.value = "";
}

function del() { //del 버튼 눌렀을때
    outputScreen.value = outputScreen.value.slice(0, -1);
}

$(".calculator button").keydown(function(keyNum){
    if(keyNum.keyCode == 8){
        del()
    }
    if(keyNum.keyCode == 13){
        Calculate()
    }
    if(keyNum.keyCode == 27){
        Clear()
    }
})

//section4 (card-game)

//게임상태
var gameState = '';

//열린 카드
var openCardId = '';
var openCardId2 = '';

//난수 생성 함수
function generateRandom (min, max){
    var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
    return ranNum;
}

var cards; //카드목록
var score = 0; //점수
var openedCtn = 0; //맞춘 카드 갯수

//카드배치
function setTable(){
    cards = [
        'img1.png', 'img1.png', //딸기
        'img2.png', 'img2.png', //체리
        '3.png', '3.png', //포도
        '4.png', '4.png', //복숭아
        '5.png', '5.png', //
        '6.png', '6.png', //
        '7.png', '7.png', //
        '8.png', '8.png', //
        '9.png', '9.png', //
        '10.png', '10.png' //
    ];
    var cardTableCode = '<tr>';
    for(var i=0;i<20;i++){
        if(i>0 && i%5 == 0){
            cardTableCode += '</tr><tr>';
        }
        var idx = generateRandom(0, 19-i);
        var img = cards.splice(idx,1);

        cardTableCode += '<td id="card' + i + '"><img src="images/'+img +'"><span>?</span></td>';
    }
    cardTableCode += '</tr>';
    $('#cardTable').html(cardTableCode);
}

//카드 전체 가리기
function hiddenCards(){
    $('#cardTable td img').hide();
    $('#cardTable td span').show();
}

//게임 시작
function startGame(){
    var sec = 6;

    $('#info').hide(); //안내 문구 가리기
    scoreInit(); //점수 초기화
    setTable(); //카드 배치

    //카운트 다운
    function setText(){
        $('#countDown').text(--sec);
    }
    var intervalID = setInterval(setText, 1000);
    setTimeout(function(){
        clearInterval(intervalID);
        $('#countDown').text('start');
        hiddenCards();
        gameState = '';
    }, 6000);
}

//카드 선택시
$(document).on('click', '#cardTable td', function(){
//*return 은, 현재 있는 함수에서 빠져나가며,그 함수를 호출했던 곳으로 되돌아 가라는 뜻*//

    if(gameState != '') return; 
    //게임 카운트중일 때 누른 경우 return
    if(openCardId2 != '') return; 
    //2개 열려있는데 또 누른 경우 return 
    //hasClass() : 선택한 요소에 클래스가 있는지 확인
    if($(this).hasClass('opened')) return; 
    //열려있는 카드를 또 누른 경우. hasClass(): class값을 갖고있는지 판단
    $(this).addClass('opened'); 
    //열려있다는 것을 구분하기 위한 class 추가

    if(openCardId == ''){
        $(this).find('img').show();
        $(this).find('span').hide();
        openCardId = this.id;
    }else{
        if(openCardId == openCardId2) return; // 같은 카드 누른 경우 return

        $(this).find('img').show();
        $(this).find('span').hide();

        var openCardSrc = $('#' + openCardId).find('img').attr('src');
        var openCardSrc2 = $(this).find('img').attr('src');
        openCardId2 = this.id;

        if(openCardSrc == openCardSrc2){//일치 
            openCardId = '';
            openCardId2 = '';
            scorePlus();
            if(++openedCtn == 10){
                alert('성공!!\n' + score + '점 입니다!');
            }
        }else{
            setTimeout(back, 1000);
            scoreMinus();
        }
    }
});

//두개의 카드 다시 뒤집기
function back(){
    $('#' + openCardId).find('img').hide();
    $('#' + openCardId).find('span').show();
    $('#' + openCardId2).find('img').hide();
    $('#' + openCardId2).find('span').show();
    $('#' + openCardId).removeClass('opened');
    $('#' + openCardId2).removeClass('opened');
    openCardId = '';
    openCardId2 = '';
}

//점수 초기화
function scoreInit(){
    score = 0;
    openedCtn = 0;
    $('#Score').text(score);
}
//점수 증가
function scorePlus(){
    score += 10;
    $('#score').text(score);
}
//점수 감소
function scoreMinus(){
    score -= 5;
    $('#score').text(score);
}

$(document).on('click', '#startBtn', function(){
    if(gameState == ''){
        startGame();
        gameState = 'alreadyStart'
    }
});

//section4:이미지 슬라이드
let imageIndex = 0;
let postion = 0;
const IMAGE_WIDTH = 1000; //한개 이미지 넓이
const btnPrevious = document.querySelector(".prev-btn")
const btnNext = document.querySelector(".next-btn")
const images = document.querySelector(".images")
 //이전 이미지
function previous(){
  if(imageIndex > 0){
    btnNext.removeAttribute("disabled")
    postion += IMAGE_WIDTH; //위치값에 이미지 넓이 더한값 저장
    images.style.transform = `translateX(${postion}px)`; //위치값(이미지넓이)만큼 X축으로 이동
    imageIndex = imageIndex - 1;
  }
  // 처음 이미지일때 버튼 비활성화
  if(imageIndex == 0){
    btnPrevious.setAttribute('disabled', 'true')
  }
}
//다음 이미지
function next(){
  if(imageIndex < 3){
    btnPrevious.removeAttribute("disabled")
    postion -= IMAGE_WIDTH; //위치값에 이미지 넓이 뺀값 저장
    images.style.transform = `translateX(${postion}px)`;
    imageIndex = imageIndex + 1;
  }
  //마지막 이미지일때 버튼 비활성화
  if(imageIndex == 3){
    btnNext.setAttribute('disabled', 'true')
  }
}
 
function init(){
  btnPrevious.setAttribute('disabled', 'true')
  btnPrevious.addEventListener("click", previous)
  btnNext.addEventListener("click", next)
}
init();

//section4: 달력
/*주요 메소드
- getYear() : 1970년 이후의 연도를 알아내는 메소드
- getMonth() : 월을 알아내는 메소드. 메소드의 반환값은 0~11. 현재 월을 구하려면 1을 더해야함
- getDate() : 날짜를 알아내는 메소드
- getDay() : 요일을 알아내는 메소드. 반환값은 0~7. 0은 일요일, 1은 월요일
*/

var today = new Date();//오늘 날짜
var date = new Date(); //today의 Date를 세어주는 역할

//이전달
function prevCalendar(){
    //이전달을 출력하려면 월에 -1
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    buildCalendar(); //달력 cell을 만들어 출력
}
//다음달
function nextCalendar(){
    //다음달을 출력하려면 월에 +1
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    buildCalendar();
}
//이전달, 다음달을 today에 넣어주고 today를 달력에 넣어줌

//현재 달 달력
function buildCalendar(){
    var doMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    /* 이번달의 첫째 날,
        new 사용 이유 : new를 쓰면 이번달으 로컬 월을 정확하게 받아옴
        new 사용하지 않으면 이번달을 받아오기 위해 +1을 해줘야함 => getMonth()는 0~11을 반환하기 때문
    */
   var lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0)
   /* 이번달의 마지막 날,
    day를 1부터 시작하는게 아니라 0부터 시작함
    다음달 시작일(1일)은 못가져오고 1전인 0, 전달 마지막일을 가져옴
    */

    var tbCalendar = document.getElementById("calendar");
    //날짜를 찍을 테이블 변수

    var tbCalenderYM = document.getElementById("tbCalenderYM");
    //테이블에 정확한 날짜를 찍는 변수

    //innerHTML : js 언어를 HTML의 권장 표준 언어로 바꿔줌
    tbCalenderYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";

    //이번달이 끝나면 다음달로 넘겨줌
    while(tbCalendar.rows.length>2){
        tbCalendar.deleteRow(tbCalendar.rows.length-1);
        //테이블 tr갯수 만큼의 열 묶음은 -1해야 30일 이후로 계속 이어짐
    }
    var row = null;
    row = tbCalendar.insertRow();
    //테이블에 새로운 열 삽입. 초기화

    var cnt = 0; //count, 셀의 갯수를 세어주는 열할

    for(i=0;i<doMonth.getDay(); i++){
        //이번달의 day만큼 for
        cell = row.insertCell(); //열 한칸한칸 만들어주는 역할
        cnt = cnt + 1; //열의 갯수를 계속 다음으로 위치
    }

    /* 달력 출력 */
    for(i=1; i<=lastDate.getDate(); i++){
        cell = row.insertCell();
        cell.innerHTML = i; //셀을 1부터 마지막 day까지 html문법에 넣어줌
        cnt = cnt + 1;
        if(cnt % 7 == 1){//일요일 계산
            cell.innerHTML = "<font color=red>" + i
        }
        if(cnt % 7 == 0){
            cell.innerHTML = "<font color=blue>" + i
            row = calendar.insertRow();
        }

        if(today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth() && i == date.getDate()){
            cell.bgColor = "gold";
        }
    }
}
console.log(today)


//section4: 키보드 버튼 연습
// const keyBtn = document.querySelector(".key_cont>div")
window.addEventListener("keydown", e => {
    const key = document.getElementById(e.key);
    if (key) key.classList.add('pressed');
  });
  
window.addEventListener("keyup", e => {
    const key = document.getElementById(e.key);
    if (key) key.classList.remove('pressed');
  });


//section5: GRAPHICS
$(".item1 img").click(function(e){
    e.preventDefault()
    $(".pop1").show()
})
$(".item2 img").click(function(e){
    e.preventDefault()
    $(".pop2").show()
})
$(".item3 img").click(function(e){
    e.preventDefault()
    $(".pop3").show()
})
$(".item4 img").click(function(e){
    e.preventDefault()
    $(".pop4").show()
})
$(".item5 img").click(function(e){
    e.preventDefault()
    $(".pop5").show()
})
$(".item6 img").click(function(e){
    e.preventDefault()
    $(".pop6").show()
})
$(".item7 img").click(function(e){
    e.preventDefault()
    $(".pop7").show()
})
$(".item8 img").click(function(e){
    e.preventDefault()
    $(".pop8").show()
})
$(".item9 img").click(function(e){
    e.preventDefault()
    $(".pop9").show()
})
$(".item10 img").click(function(e){
    e.preventDefault()
    $(".pop10").show()
})
$(".item11 img").click(function(e){
    e.preventDefault()
    $(".pop11").show()
})
$(".item12 img").click(function(e){
    e.preventDefault()
    $(".pop12").show()
})
$(".popupWrap").click(function(){
    // $(".popupWrap").css({display:"none"})
    $(".popupWrap").hide()
})