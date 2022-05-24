$(document).ready(function() {
  
  var detailLi = $(".details li:first"); 
  $(".pageNum span").eq(0).addClass("pageNumActive");
  $(".pageFirst").addClass("pageActive");

  //新闻详情页右侧默认展示
  var newsHotLi = $(".newsHot li:first");
  var newsRecommendLi = $(".newsRecommend  li:first");
  newsHotLi.addClass("detailListShow");

  //判断字符串长度
  function detailLength(a,num) {
    a.addClass("detailListShow");
    var detail = $(".detailsRight span");
    var index = a.index();
    var value = detail.eq(index).text();
    var len = value.length;
    if (len > num) {
      varlenMore = value.substring(0, num);
      detail.eq(index).html(varlenMore + "...");
    } else {
      detail.eq(index).html(value);
    }
  }
  detailLength(detailLi,72);
  detailLength(newsRecommendLi, 72);
  
  function detailList(ss) {
    $.each($(".listDetails"), function () { 
      var value=$(this).children("span").text();
      var len = value.length;
      if (len > 246) {
        varlenMore = value.substring(0, 246);
        $(this).children("span").html(varlenMore + "...");
      } else {
        $(this).children("span").html(value);
      }
    });
    
  }
  detailList();


  //首页热门新闻hover事件
  $(".details li").hover(
    function() {
      var a = $(this);
      detailLength(a,72);
      $(this)
      .siblings()
      .removeClass("detailListShow");
      $(this).addClass("detailListShow");

    },
    function() {
      value = "";
      // $(this).removeClass("detailListShow");
    }
  );
  
  //新闻详情
  $(".newsRecommend li").hover(
    function() {
      $(this)
      .siblings()
      .removeClass("detailListShow");
      $(this).addClass("detailListShow");

  });
  $(".newsHot li").hover(
    function() {
      var a = $(this);
      detailLength(a,72);
      $(this)
      .siblings()
      .removeClass("detailListShow");
      $(this).addClass("detailListShow");

    },
    function() {
      value = "";
      // $(this).removeClass("detailListShow");
    }
  );
  
  //分页
  //1234...
  $(".pageNum span").click(function () { 
    $(".pageNext").removeClass("pageNo");
    $(".pageEnd").removeClass("pageActive");
    var index = $(this).index();
    pageIsEnd(index)
    $(this).addClass("pageNumActive");
    $(this).siblings().removeClass("pageNumActive");
    if (index == 0) {
      $(".pageFirst").addClass("pageActive");
    } else {
      $(".pageFirst").removeClass("pageActive");
    }
    
  });
  //首页
  $(".pageFirst").click(function () { 
    $(".pageNext").removeClass("pageNo");
    $(this).addClass("pageActive");
    $(this).siblings().removeClass("pageActive");
    $(".pageNum span").removeClass("pageNumActive");
    $(".pageNum span").eq(0).addClass("pageNumActive");
  });
  //下一页
  $(".pageNext").click(function (e) { 
    e.preventDefault();
    if ($(".pageNext").hasClass("pageNo")) return;
    var index = $(".pageNumActive").index();
    pageIsEnd(index+1);
    if (pageIsEnd(index+1)) return;
    $(".pageNext").removeClass("pageNo");
    $(this).siblings().removeClass("pageActive");
    $(".pageNumActive").removeClass("pageNumActive");
    $(".pageNum span").eq(index+1).addClass("pageNumActive");
    
  });
  //尾页
  $(".pageEnd").click(function (e) { 
    e.preventDefault();
    $(".pageNext").addClass("pageNo");
    $(this).addClass("pageActive");
    $(this).siblings().removeClass("pageActive");
    $(".pageNumActive").removeClass("pageNumActive");
    $(".pageNum span").last().addClass("pageNumActive");
  });
  //判断当前数字是否是最后一页
  function pageIsEnd(index) {
    var length = $(".pageNum span").length;
    if (index == length - 1) {
      $(".pageEnd").addClass("pageActive");
      $(".pageNext").addClass("pageNo");
      $(".pageNum span").last().addClass("pageNumActive");
      $(".pageNum span").last().siblings().removeClass("pageNumActive");
      return true;
    }
  }
});
