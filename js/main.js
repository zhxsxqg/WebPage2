$(function(){
    $('.menu').click(function(){
        $('nav').toggle();
    })
    $(window).resize(function(){
        var width = $(window).width();
        $('nav').hide();
        if(width>768){
            $('nav').show();
        }else {
            reset();
        }
    });
    $(window).scroll(function() {
        var top=$(window).scrollTop();
        var width = $(window).width();
        if(width>768){
            if(top>40){
                $('header').css({
                    'background':'#FFF',
                    'padding':'25px 0',
                });
                $('header a').css('color','#666');
                $('header .logo img').attr('src','http://pinkpointmedia.com/wp-content/themes/pp/images/pp_black.png')
            }else{
                reset();
            }
        }
        if(top>100){
            $('.side_jump').css('right','0');
        }else {
            $('.side_jump').css('right','-80px');
        }
    });
    var arr=['.content-1','.content-3','.content-4','.content-5'];
    $('.side_jump a').click(function(){
        var index=$(this).index();
        var height=getHeight(arr[index]);
        $("html,body").animate({scrollTop:height},350);
    })
    function getHeight(ele){
        return $(ele).offset().top;
    }
    function reset(){
        $('header').css({
            'background':'transparent',
            'padding':'30px 0',
        });
        $('header a').css('color','#FFF')
        $('header .logo img').attr('src','http://pinkpointmedia.com/wp-content/themes/pp/images/pp_white.png')
    }
})
