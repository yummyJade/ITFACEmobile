//导航栏点击部分
 $(".menu").click(function(event){
      event.stopPropagation(); 
      //依据每个页面具体情况而定，这里先关掉介绍
      $(".texts div").hide();
    $(".cover").slideDown(300, function() {
        
        $(".openmenu").show();
    })
 })

//点击黑色蒙版
 $(".cover").click(function(event){

        $(".openmenu").hide(100,function(){
            $(".cover").slideUp(700)
        });

});

 
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