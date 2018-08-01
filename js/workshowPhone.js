

H = $(window).height(); //获得窗口宽度
W = $(window).width(); //获得窗口高度
var p = H/W;
if(p>1.778)
{


$(".container").css({
    'height':H
})
$(window).resize(function(){

    $(".container").css({
        'height':H
    })
})

}
//头部固定
$(document).ready(function() {
	var a, b, c;
	a = $(window).height(); //浏览器窗口高度  
	var group = $("h2");
	$(window).scroll(function() {
		b = $(this).scrollTop(); //页面滚动的高度  
		c = group.offset().top;

		//元素距离文档（document）顶部的高度
		// console.log("a="+a);
		// console.log("b="+b);
		// console.log("c="+c);  
		if (b > c) {
			$(".mobi_nav").css({
				'position': 'fixed',
				'margin-top': 0,
				'top': 0,
				'z-index': 400
			})
			$(".container").css('height', '9.22rem')


		} else {
			$(".mobi_nav").css({
				'position': 'static',
				'margin-top': '0.48rem',
				'z-index': 'auto'

			})
			$(".mobi_nav").css("position", "static");
			$(".container").css('height', '9.6rem')
			$(".mobi_nav").css("z-index", "auto");
		}
	});
});



$(".pagewrap ul li").click(function() {
	$(".pagewrap ul li").index(this);
	$(".pagewrap ul li").removeClass("pageselected");
	$(this).addClass("pageselected");
})