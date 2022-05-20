$(document).ready(function () {
  //为了首页样式
  $(".collectionNav span")
    .eq(3)
    .css("border", "none");
  $(".gossiAll")
    .eq(2)
    .css("margin-right", "0");
  
  //首页默认展示第一条热门新闻
  $(".collectionListTop").eq(0).addClass("collectShow");

  //网红默认点击第一个标签
  $(".encyStyleRight span").eq(0).addClass("styleActive");
  $(".encyCategoryRight span").eq(0).addClass("categoryActive");


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

  // 网红百科标签选择
  function page() {
    $(".pageNum span").siblings().removeClass("pageNumActive");
    $(".pageFirst").siblings().removeClass("pageActive");
    $(".pageNum span").eq(0).addClass("pageNumActive");
    $(".pageFirst").addClass("pageActive");
    $(".pageNext").removeClass("pageNo");
  }
  //多选
  $(".encyStyleRight span").click(function () { 
    //默认分页
    page();
    if ($(this).hasClass("styleActive")) {
      $(this).removeClass("styleActive");
    } else {
      $(this).addClass("styleActive");
    }
  })
  //单选
  $(".encyCategoryRight span").click(function () {
    //默认分页
    page();
    $(this).addClass("categoryActive");
    $(this).siblings().removeClass("categoryActive");
  })
});


//首页轮播图插件
$(document).ready(function () {
  console.log(window.location.pathname)
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
