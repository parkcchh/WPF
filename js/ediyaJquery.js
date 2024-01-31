$(document).ready(function(){
    mainSlider();
    // fnbControl();
    openClose(".btnOpen",".openTarget");
    openClose(".listOpen",".fnb");
    sacondSlider();
    detailTabUI();
    sideBarControl();
  });
function mainSlider(){
  $('.beanistSlider').bxSlider({
    auto: true,
    touchEnabled: false,
    adaptiveHeight: true,
    controls: false
  });
}
function openClose(btn,target){
  $(btn).click(function(){
    $(target).toggleClass("active");
  });
}
function fnbControl(){
  $(".hidenFnb").hover(function(){
    $(".fnb").slideDown();
  },function(){
    $(".fnb").slideUp();
  });
}
function sacondSlider(){
  $('.afterSlider').bxSlider({
    auto: true,
    touchEnabled: false,
    adaptiveHeight: true,
    controls: true,
    pager: false,
    moveSlides: 1,
		slideMargin: 80,
    slideWidth: 450,
    minSlides: 1,
		maxSlides: 2
  });
}
function detailTabUI(){
  $(".detailTabMenu li").click(function(){
      var activeTab = "#" + $(this).attr("data-tabName");
      $(".detailTabMenu li").removeClass("activated");
      $(this).addClass("activated");

      $(".tabPage").removeClass("activated");
      $(activeTab).addClass("activated");
  });
}

function sideBarControl(){
  var target = $(".couponContainer");
  var currentPos = target.children("div:first-of-type").offset().top;
  $(window).on("scroll",function(){
    if($(this).scrollTop() >= currentPos){
      target.addClass("lock");
    }else{
      target.removeClass("lock");
    }
  });
}