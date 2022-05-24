$(document).ready(function () {
  const pathname = location.search;
  const query = pathname.substring(1);
  const pairs = query ? query.split("&") : "";
  let entyTitle = "";
  let cateTitle = ""; 
  $.each(pairs, function (index, valueOfElement) { 
    if (!pairs) return;
    if (valueOfElement.indexOf("param1") >= 0) {
      entyTitle = pairs[index]?pairs[index].split('='):"";
    } else if(valueOfElement.indexOf("param2") >= 0){
      cateTitle = pairs[index]?pairs[index].split('='):""; 
    }
  });

  //为了首页样式
  $(".collectionNav span")
    .eq(3)
    .css("border", "none");
  $(".gossiAll")
    .eq(2)
    .css("margin-right", "0");
  
  //首页默认展示第一条热门新闻
  $(".collectionListTop").eq(0).addClass("collectShow");

  //网红标签点击
  $.each($(".encyStyleRight span"), function () { 
    if (!pairs) return;
    var value=$(this).text();
    if (value == decodeURIComponent(entyTitle[1])) {
      $(this).addClass("styleActive");
      $(this).siblings().removeClass("styleActive");
      return;
    } 
    
  });
  $.each($(".encyCategoryRight span"), function () { 
    if (!pairs) return;
    var value=$(this).text();
    if (value == decodeURIComponent(cateTitle[1])) {
      $(this).addClass("categoryActive");
      $(this).siblings().removeClass("categoryActive");
      return;
    } 
  });

  //首页最新收录list判断能否被4整除
  function sum(x,y) {
    var  a = x.find(".collectImg")
    $.each(a, function(index, value) {
      var z = (index + 1) % y;
      if(z == 0){ //余数为0就代表能被整除  
        a.eq(index).css("margin-right", "0"); 
      }
    })
    
  }
  //默认展示第一个抖音去除右侧right
  sum($(".collectShow"), 4);


  //抖音、快手、虎牙、斗鱼的点击切换事件
  $(".collectionNav span").hover(function () {
    var Index = $(".collectionNav span").index(this);
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
    $(".collectionListTop")
      .eq(Index)
      .addClass("collectShow");
    $(".collectionListTop")
      .eq(Index)
      .siblings()
      .removeClass("collectShow");
      sum($(".collectShow"),4);
  });

});


//首页轮播图插件
$(document).ready(function () {
  var swiper = new Swiper(".swiper", {
    autoplay: true, // 可选选项，自动滑动
    loop: true, // 无限轮播
    delay: 5000, // 多长时间轮播一张
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
});
