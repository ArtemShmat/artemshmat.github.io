//-----------------------------------------------------Появляючі вікна при наведенні в другому блоці-----------------------------------------------------
$(document).ready(function(){
    $(".bag1").mouseenter(function(){
        $(".bag1-1").show(400);
    });
      $(".bag1").mouseleave(function(){
        $(".bag1-1").hide(400);
    });
       $(".bag2").mouseenter(function(){
        $(".bag2-1").show(400);
    });
      $(".bag2").mouseleave(function(){
        $(".bag2-1").hide(400);
    });
       $(".bag3").mouseenter(function(){
        $(".bag3-1").show(400);
    });
      $(".bag3").mouseleave(function(){
        $(".bag3-1").hide(400);
    });
        $(".bag4").mouseenter(function(){
        $(".bag4-1").show(400);
    });
      $(".bag4").mouseleave(function(){
        $(".bag4-1").hide(400);
    });
       $(".bag5").mouseenter(function(){
        $(".bag5-1").show(400);
    });
      $(".bag5").mouseleave(function(){
        $(".bag5-1").hide(400);
    });
//-----------------------------------------------------Слайдер 1----------------------------------------------------------------------------------------
			$(".slider").each(function() {
				var repeats = 5, // кількість повторювань автоматичного прокручування
						interval = 3, // інтервал в секундах
						repeat = true, // чи треба автоматично прокручувати (true/false)
						slider = $(this),
						repeatCount = 0,
						elements = $(slider).find("li").length;
				$(slider)
					.append("<div class='header-body-layer'><div class='nav'></div></div>")
					.find("li").each(function() {
						$(slider).find(".nav").append("<span data-slide='"+$(this).index()+"'></span>");
						$(this).attr("data-slide", $(this).index());
					})
					.end()
					.find("span").first().addClass("on");
				if (repeat) {
					repeat = setInterval(function() {
						if (repeatCount >= repeats - 1) {
							window.clearInterval(repeat);
						}
						var index = $(slider).find('.on').data("slide"),
								nextIndex = index + 1 < elements ? index + 1 : 0;
						sliderJS(nextIndex, slider);
						repeatCount += 1;
					}, interval * 1000);
				}
			});
	
	function sliderJS(index, slider) { // slide
		var ul = $(slider).find("ul"),
				bl = $(slider).find("li[data-slide=" + index + "]"),
				step = $(bl).width();
		$(slider)
			.find("span").removeClass("on")
			.end()
			.find("span[data-slide=" + index + "]").addClass("on");
		$(ul).animate({
			marginLeft: "-" + step * index
		}, 500);
	}
	$(document).on("click", ".slider .nav span", function(e) { // slider click navigate
		e.preventDefault();
		var slider = $(this).closest(".slider"),
				index = $(this).data("slide");
		sliderJS(index, slider);
	});
    
//-----------------------------------------------------Слайдер 2----------------------------------------------------------------------------------------
    $(".slider1").each(function() {
				var repeats = 5, // кількість повторювань автоматичного прокручування
						interval = 3, // інтервал в секундах
						repeat = true, // чи треба автоматично прокручувати (true/false)
						slider = $(this),
						repeatCount = 0,
						elements = $(slider).find("li").length;
				$(slider)
					.append("<div class='nav'></div>")
					.find("li").each(function() {
						$(slider).find(".nav").append("<span data-slide='"+$(this).index()+"'></span>");
						$(this).attr("data-slide", $(this).index());
					})
					.end()
					.find("span").first().addClass("on");
				if (repeat) {
					repeat = setInterval(function() {
						if (repeatCount >= repeats - 1) {
							window.clearInterval(repeat);
						}
						var index = $(slider).find('.on').data("slide1"),
								nextIndex = index + 1 < elements ? index + 1 : 0;
						sliderJS(nextIndex, slider);
						repeatCount += 1;
					}, interval * 1000);
				}
			});
	function sliderJS(index, slider) { // slide
		var ul = $(slider).find("ul"),
				bl = $(slider).find("li[data-slide=" + index + "]"),
				step = $(bl).width();
		$(slider)
			.find("span").removeClass("on")
			.end()
			.find("span[data-slide=" + index + "]").addClass("on");
		$(ul).animate({
			marginLeft: "-" + step * index
		}, 500);
	}
	$(document).on("click", ".slider1 .nav span", function(e) { // slider click navigate
		e.preventDefault();
		var slider = $(this).closest(".slider1"),
				index = $(this).data("slide");
		sliderJS(index, slider);
	});
//-----------------------Анімація рейтингів----------------------------------------------------------------------------------------  
var sc = 1900;
  	var delay = 1000;
	$(window).scroll(function(){
		if($(this).scrollTop()>sc){
    $('.main-four-body-static1').animate({
				'width': 430.55
			}, 2000, 'linear')
    }		
	})

    var sc1 = 1900;
	$(window).scroll(function(){
		if($(this).scrollTop()>sc1){
    $('.main-four-body-static2').animate({
				'width': 490.5
			}, 2000, 'linear')
    }		
	})
    
      var sc2 = 1900;
	$(window).scroll(function(){
		if($(this).scrollTop()>sc2){
    $('.main-four-body-static3').animate({
				'width': 376.05
			}, 2000, 'linear'),delay
    }		
	})
    
      var sc3 = 1900;
	$(window).scroll(function(){
		if($(this).scrollTop()>sc2){
    $('.main-four-body-static4').animate({
				'width': 501.04
			}, 2000, 'linear'),delay
    }		
	})
 //-----------------------------------------------------------------показує і заберає значок пошуку------------------------------------------     
    $("#header-search").focusin(function() {
       $('.header-search-find').hide();
});
	$("#header-search").focusout(function() {
       $('.header-search-find').show();
});
//-----------------------------------------------------------------показує і заберає двойні стрілки в меню-----------------------------------
    $('.qq', 'qw').mouseover(function(){
        $('.gg').show();
        $('#ww').hide();
    })
    $('.sub-menu-a').mouseleave(function(){
        $('.gg').hide();
        $('#ww').show();
    })
//-------------------------------------------------------------------підсвітка меню при прокрутці-------------------------------------------
     var sc1 = 100;
	 var sc2 = 1100;
	$(window).scroll(function(){
		if($(this).scrollTop()>sc1 && $(this).scrollTop()<sc2) {
    $('.corect11').css({'color':'red','font-weight':'bold'})
    }
        else {
            $('.corect11').css({'color':'black','font-weight':'normal'})
        }
	})
    var sc3 = 1100;
	 var sc4 = 1800;
	$(window).scroll(function(){
		if($(this).scrollTop()>sc3 && $(this).scrollTop()<sc4) {
    $('.corect5').css({'color':'red','font-weight':'bold'})
    }
        else {
            $('.corect5').css({'color':'black','font-weight':'normal'})
        }
	})
      var sc5 = 1800;
	 var sc6 = 2600;
	$(window).scroll(function(){
		if($(this).scrollTop()>sc5 && $(this).scrollTop()<sc6) {
    $('.corect12').css({'color':'red','font-weight':'bold'})
    }
        else {
            $('.corect12').css({'color':'black','font-weight':'normal'})
        }
	})
       var sc7 = 2600;
	 var sc8 = 3600;
	$(window).scroll(function(){
		if($(this).scrollTop()>sc7 && $(this).scrollTop()<sc8) {
    $('.corect13').css({'color':'red','font-weight':'bold'})
    }
        else {
            $('.corect13').css({'color':'black','font-weight':'normal'})
        }
	})
//-----------------------------------функція перевірки пустоти в полях--------------------------------   
    $('#send').click(function(){
        if($('#footer-form-text').val()== '' || $('#footer-form-text1').val()== '' || $('#footer-form-textarea').val()== ''){
            alert('Заповніть будь-ласка усі поля');
        }
    })
//--------------------скрвпт для бургер-меню---------------------------------------------------------   
    $(".burger-menu").click(function(){
        $(".header-menu-list").toggleClass('header-menu-list-1');
    });
//----------------------------------------------------------------------------------------
 
});