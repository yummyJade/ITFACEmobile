
H = $(window).height(); //获得窗口宽度
W = $(window).width(); //获得窗口高度
var p = H/W;
if(p>1.55)
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
!(function(doc, win) {
            var docEle = doc.documentElement,//获取html元素
                event = "onorientationchange" in window ? "orientationchange" : "resize",//判断是屏幕旋转还是resize;
                fn = function() {
                    var width = docEle.clientWidth;
                    width && (docEle.style.fontSize = 100  * (width / 540) + "px");//设置html的fontSize，随着event的改变而改变。
                    	
                };
            
            win.addEventListener(event, fn, false);
            doc.addEventListener("DOMContentLoaded", fn, false);        
        }(document, window));


//关闭部门介绍
// function closetexts()
// {
//     $(".texts div").hide();
//     $("body").unbind();
// }
// function bdclose() { //自定义一个函数这个函数只关闭弹的窗口，
//     $("body").click(function() { //帮订body事件
//         closetexts(); //这个就是调用关闭弹窗口的函数
//     })


// }

$(".balls>div").click(function(){
    // bdclose();
    //阻止事件冒泡
    event.stopPropagation(); 
    var index = $(".balls>div").index(this);
    $(".texts div").eq(index).show();

         
    return false;

})

 $(document).click(function(event){
      var _con = $(".texts div");   // 设置目标区域
      if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1
        $(".texts div").hide();
      }
});

//导航栏点击部分
 $(".menu").click(function(){
      event.stopPropagation(); 
      //依据每个页面具体情况而定，这里先关掉介绍
      $(".texts div").hide();
    $(".cover").slideDown(700, function() {
        
        $(".openmenu").show();
    })
 })

//点击黑色蒙版
 $(".cover").click(function(event){

        $(".openmenu").hide(100,function(){
            $(".cover").slideUp(700)
        });

});