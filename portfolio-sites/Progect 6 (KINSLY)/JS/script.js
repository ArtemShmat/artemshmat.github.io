$(document).ready(function(){
    $(document).mousemove(function(event){ 
//        прозрачні трикутники
        $("span").text("X: " + event.pageX + ", Y: " + event.pageY); 
        var firstFigureX=event.pageX;
        var firstFigureY=event.pageY;
        var fFigReplaceX=-firstFigureX/40;
        var basePositionX = 100;
        var fFigReplaceY=-firstFigureY/20;
        var basePositionY= 400;
       $('.firstFigure').css({'left': basePositionX+fFigReplaceX });
       $('.firstFigure').css({'top': basePositionY+fFigReplaceY });
        
        
        var secondFigureX=event.pageX;
        var secondFigureY=event.pageY;
        var sFigReplaceX=secondFigureX/35;
        var basePositionSecX = 1050;
        var sFigReplaceY=secondFigureY/20;
        var basePositionSecY= 0;
       $('.secondFigure').css({'left': basePositionSecX+sFigReplaceX });
       $('.secondFigure').css({'top': basePositionSecY+sFigReplaceY });
        
        
        var thirdFigureX=event.pageX;
        var tFigReplaceX=thirdFigureX/25;
        var basePositionThiX = 735;
        var basePositionThiY= 0;
       $('.thirdFigure').css({'left': basePositionThiX+tFigReplaceX });
        
        
        var fourFigureX=event.pageX;
        var fourFigureY=event.pageY;
        var foFigReplaceX=-fourFigureX/25;
        var basePositionFourX = 1635;
        var foFigReplaceY=-fourFigureY/10;
        var basePositionFourY= 300;
       $('.fourFigure').css({'left': basePositionFourX+foFigReplaceX });
       $('.fourFigure').css({'top': basePositionFourY+foFigReplaceY });
        
//        зафарбовані трикутники
        var figureFirstX=event.pageX;
        var figureFirstY=event.pageY;
        var FigFirstPlaceX=figureFirstX/15;
        var FigFirstBasePositionX = 150;
        var FigFirstPlaceY=-figureFirstY/10;
        var FigFirstBasePositionY= 600;
       $('.container-bag-figure-first').css({'left': FigFirstBasePositionX+FigFirstPlaceX });
       $('.container-bag-figure-first').css({'top': FigFirstBasePositionY+FigFirstPlaceY });
        
        
        var figureSecondX=event.pageX;
        var figureSecondY=event.pageY;
        var FigSecondPlaceX=-figureSecondX/25;
        var FigSecondBasePositionX = 155;
        var FigSecondPlaceY=figureSecondY/8;
        var FigSecondBasePositionY= 185;
       $('.container-bag-figure-second').css({'left': FigSecondBasePositionX+FigSecondPlaceX });
       $('.container-bag-figure-second').css({'top': FigSecondBasePositionY+FigSecondPlaceY });
        
        
        var figureThirdX=event.pageX;
        var figureThirdY=event.pageY;
        var FigThirdPlaceX=figureThirdX/22;
        var FigThirdBasePositionX = 900;
        var FigThirdPlaceY=figureThirdY/15;
        var FigThirdBasePositionY= 215;
       $('.container-bag-figure-third').css({'left': FigThirdBasePositionX+FigThirdPlaceX });
       $('.container-bag-figure-third').css({'top': FigThirdBasePositionY+FigThirdPlaceY });
        
        
        var figureFourX=event.pageX;
        var figureFourY=event.pageY;
        var FigFourPlaceX=-figureFourX/45;
        var FigFourBasePositionX = 1605;
        var FigFourPlaceY=figureFourY/25;
        var FigFourBasePositionY= 95;
       $('.container-bag-figure-four').css({'left': FigFourBasePositionX+FigFourPlaceX });
       $('.container-bag-figure-four').css({'top': FigFourBasePositionY+FigFourPlaceY });
        
        
        var figureFiveX=event.pageX;
        var figureFiveY=event.pageY;
        var FigFivePlaceX=figureFiveX/40;
        var FigFiveBasePositionX = 1645;
        var FigFivePlaceY=-figureFiveY/20;
        var FigFiveBasePositionY= 485;
       $('.container-bag-figure-fife').css({'left': FigFiveBasePositionX+FigFivePlaceX });
       $('.container-bag-figure-fife').css({'top': FigFiveBasePositionY+FigFivePlaceY });
    });
});