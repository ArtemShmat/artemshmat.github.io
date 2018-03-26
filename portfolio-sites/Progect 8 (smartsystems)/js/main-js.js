$(document).ready(function(){
// показати або сховати менюю
    $(".burger-menu").click(function(){
        $(".main-left-container").toggle();
    });
    // змінна кольору фону в правому блоці для facebook
    $('.main-left-facebook-href').hover(
        function(){
            $('.main-left-facebook-background').css('background-color','#4fc6f8');
        },
        function(){
            $('.main-left-facebook-background').css('background-color','#c5cdd1');
        }
    );
// змінна кольору фону в правому блоці для twitter
    $('.main-left-twitter-href').hover(
        function(){
            $('.main-left-twitter-background').css('background-color','#4fc6f8');
        },
        function(){
            $('.main-left-twitter-background').css('background-color','#c5cdd1');
        }
    );
// змінна кольору фону в правому блоці для google+
    $('.main-left-google-href').hover(
        function(){
            $('.main-left-google-background').css('background-color','#4fc6f8');
        },
        function(){
            $('.main-left-google-background').css('background-color','#c5cdd1');
        }
    );
    // змінна кольору фону в правому блоці для RssFeeds
    $('.main-left-RssFeeds-href').hover(
        function(){
            $('.main-left-RssFeeds-background').css('background-color','#4fc6f8');
        },
        function(){
            $('.main-left-RssFeeds-background').css('background-color','#c5cdd1');
        }
    );
    // змінна кольору фону в правому блоці для Pinterest
    $('.main-left-Pinterest-href').hover(
        function(){
            $('.main-left-Pinterest-background').css('background-color','#4fc6f8');
        },
        function(){
            $('.main-left-Pinterest-background').css('background-color','#c5cdd1');
        }
    );

















    var slides = $(".slider .slides").children(".slide, .slide-text1"); // Получаем массив всех слайдов
    var width = $(".slider .slides").width(); // Получаем ширину видимой области
    var i = slides.length; // Получаем количество слайдов
    var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
    var cheki = i-1;

    $(".slider .slides").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов

    for (j=0; j < slides.length; j++) {
        if (j==0) {
            $(".slider .navigation").append("<div class='dot active'></div>");
        }
        else {
            $(".slider .navigation").append("<div class='dot'></div>");
        }
    }

    var dots = $(".slider .navigation").children(".dot");
    offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
    i = 0; // Обнуляем номер текущего слайда

    $('.slider .navigation .dot').click(function(){
        $(".slider .navigation .active").removeClass("active");
        $(this).addClass("active");
        i = $(this).index();
        offset = i * width;
        $(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
    });


    $("body .slider .next").click(function(){	// Событие клика на кнопку "следующий слайд"
        if (offset < width * cheki) {	// Проверяем, дошли ли мы до конца
            offset += width; // Увеличиваем смещение до следующего слайда
            $(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
            $(".slider .navigation .active").removeClass("active");
            $(dots[++i]).addClass("active");
        }
    });


    $("body .slider .prev").click(function(){	// Событие клика на кнопку "предыдущий слайд"
        if (offset > 0) { // Проверяем, дошли ли мы до конца
            offset -= width; // Уменьшаем смещение до предыдущегоо слайда
            $(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
            $(".slider .navigation .active").removeClass("active");
            $(dots[--i]).addClass("active");
        }
    });





    // модальне вікно
    $('a[name=modal]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');

        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('#mask').css({'width':maskWidth,'height':maskHeight});

        $('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow",0.8);

        var winH = $(window).height();
        var winW = $(window).width();

        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);

        $(id).fadeIn(2000);

    });

    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#mask, .window').hide();
    });

    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });

















});