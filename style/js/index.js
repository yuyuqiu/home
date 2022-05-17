// window.onload = function() {
//   var carContent = $(".carContent"),
//     pics = $(".content"),
//     items = $(".content li"),
//     pic_width = items.eq(0).width(),
//     dots = $(".banner_slider_dots a"),
//     current = 0,
//     timmer = null,
//     size = dots.size();
//   // 定义一个鼠标滑过判断事件
//   carContent.hover(
//     function() {
//       clearInterval(timmer);
//     },
//     function() {
//       timmer = setInterval(slider, 3000);
//     }
//   );
//   function slider() {
//     current++;
//     doSlider();
//   }
//   function doSlider() {
//     // 圆点按钮轮播
//     dots
//       .removeClass("dots_active")
//       .eq(current % size)
//       .addClass("dots_active");
//     // 图片轮播
//     pics.stop().animate(
//       {
//         left: -current * pic_width
//       },
//       1000,
//       function() {
//         if (current >= size) {
//           current = 0;
//           pics.css("left", -current * pic_width + "px");
//         } else if (current < 0) {
//           current = size - 1;
//           pics.css("left", -size * pic_width + "px");
//         }
//       }
//     );
//   }
//   timmer = setInterval(slider, 3000);

//   // 点击圆点切换图片
//   dots.click(function() {
//     current = $(this).index();
//     doSlider();
//   });
// };

$(document).ready(function() {
  //为了样式
  $(".collectionNav span")
    .eq(3)
    .css("border", "none");
  $(".gossiAll")
    .eq(2)
    .css("margin-right", "0");
  $(".collectImg")
    .eq(3)
    .css("margin-right", "0");
  $(".collectImg")
    .eq(7)
    .css("margin-right", "0");
  var detailLi = $(".detailListShow");
  //判断字符串长度
  function detailLength(a) {
    var detail = $(".detailsRight span");
    var index = a.index();
    console.log(index);
    var value = detail.eq(index).text();
    console.log(detail.eq(index));
    var len = value.length;
    if (len > 72) {
      varlenMore = value.substring(0, 72);
      detail.eq(index).html(varlenMore + "...");
    } else {
      detail.eq(index).html(value);
    }
  }
  detailLength(detailLi);
  //热门新闻hover事件
  $(".details li").hover(
    function() {
      var a = $(this);
      detailLength(a);
      $(this).addClass("detailListShow");
      $(this)
        .siblings()
        .removeClass("detailListShow");
    },
    function() {
      value = "";
      $(this).removeClass("detailListShow");
    }
  );
  //截取新闻详细页面的长度

  //抖音、快手、虎牙、斗鱼的点击切换事件
  $(".collectionNav span").click(function() {
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
  });
});

$(document).ready(function() {
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
