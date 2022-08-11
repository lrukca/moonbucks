$(function(){
    let ct = 1;  //카운트
 
    const imgLength = $('.imgSlideIn').children().length - 2;
    let li = '';
    for( let i=0; i < imgLength; i++ ) {
         if(i == 1) {
             li += '<li class="act"></li>';
         }else{
            li += '<li></li>';
         }
    }
    $('.page').html(li);
 
    //imgSlideIn 의 크기 
    const imgSlideInWidth = $('.imgSlideIn').width();
    //화면의 크기 
    const scrWidth = $(window).width();
    //(imgSlideIn - 화면의크기)2
    const gap = (imgSlideInWidth - scrWidth)/2;
    $('.imgSlideIn').css('left', -gap+"px");
    console.log(gap);



    $('.imgSlider').hide()
    $('.search-btn').click(function(e){
        e.preventDefault();
        $('.searchForm,.input-search').toggleClass('act');
    });
$('.gnb>li').hover(function(){
    $(this).find('.lnb').slideToggle();
});
$('.mobile-nav-box>li').click(function(){
    if($(this).find('fa-solid').hasClass('fa-angle-down')){
        $(this).find('fa-solid').removeClass('fa-angle-down').addClass('fa-angle-up');
    }else{
        $(this).find('fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
    $(this).find('.mobile-lnb').slideToggle();
  })

$('.menu').click(function(){
    $('.wrapper').css({
        position:'absolute',
        top:0,
        left:0,
        width:'100%'
    }).animate({
        left:'-70%'
    }, 500);
});
  /*내꺼*/
$('.menu, .xclose').click(function(){  
    $('.fadeblack').animate({width:"toggle"},500);
  })
  $('.xclose').click(function(){
    $('.wrapper').animate({
        left:0
    },500,function(){
        $('.wrapper').css('position','relative');
    })
  })
  $('.imgs').click(function(e){
    e.preventDefault();
    $('.imgSlider').slideToggle("fast", function(){
       if($(this).css('display') == 'none'){
          $('.imgs').find('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
       }else{
          $('.imgs').find('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');
       }
    });
    });
    $('.notice-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        arrows: false
    });

    $('.summer-bg').mouseover(function(){
        $(this).find('.sLeftIn, .sRightIn').css('animation-play-state', 'running');
    });

    // $(window).scroll(function(){
    //     let otop = $('.summer-bg').offset().top;
    //     console.log(otop);
    //     if(otop == 1047) {
    //         $('.summer-bg').find('.sLeftIn, .sRightIn').css('animation-play-state', 'running');
    //     }

    // })
    // $('.winter_fav').mouseover(function(){
    //     $(this).find('.txt-01, .txt-02').css('animation-play-state', 'running');
    // })
    $('.next').click(function(e){
        e.preventDefault();
        mySlider(-1);
    });

    $('.prev').click(function(e){
        e.preventDefault();
        mySlider(1);
    });
    
    setInterval(mySlider,3000);
    


 
    function mySlider(idx=-1){
       const imgW = $('.opacity-1').width();
       let aniGap;
       if (idx == 1){
           aniGap = (imgW+15)-gap ;
       }else{
           aniGap = -(gap+imgW+15);
       }
       $('.imgSlideIn').animate({
          left: aniGap + "px"
       }, 500, function(){
          $('.imgSlideIn div').removeClass('opacity-1');
          $('.imgSlideIn div:eq(0)').clone().appendTo('.imgSlideIn');
          $('.imgSlideIn div:eq(0)').remove();
          $('.imgSlideIn div:eq(2)').addClass('opacity-1');
          $('.imgSlideIn').css('left', -(gap)+"px");
 
          ct++;
          if(ct == 3)  ct = 0;
          li = '';
          for( i =0; i<imgLength; i++) {
             if(i == ct) {
                li += '<li class="act"></li>';
             }else{
                li += '<li></li>';
             }
        }
        $('.page').html(li);    
       });
    }
    
 
 });
