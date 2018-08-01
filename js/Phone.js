//promise
function promisesetajax(obj) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open(obj.method, obj.url, obj.async);
        if (obj.method == 'GET') {

            request.send();
        } else if (obj.method == 'POST') {
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

            request.send(obj.dat);
        }

        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    var dat = JSON.parse(request.responseText);
                    resolve(dat);

                } else {
                    reject(new Error(request.status))
                }
            }

        }

    })
}


//导航栏点击部分
$(".menu").click(function(event) {
    event.stopPropagation();
    var a = $(".mobi_nav").offset().top;
    $(".cover").css('top', a)
    //依据每个页面具体情况而定，这里先关掉介绍
    $(".texts div").hide();
    $(".cover").slideDown(300, function() {

        $(".openmenu").show();
    })
})

//点击黑色蒙版
$(".cover").click(function(event) {


    $(".openmenu").hide(100, function() {
        $(".cover").slideUp(300)
    });

});


!(function(doc, win) {
    var docEle = doc.documentElement, //获取html元素
        event = "onorientationchange" in window ? "orientationchange" : "resize", //判断是屏幕旋转还是resize;
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 100 * (width / 540) + "px"); //设置html的fontSize，随着event的改变而改变。

        };

    win.addEventListener(event, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
}(document, window));



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
                // 'margin-top': 0,
                'top': 0,
                'z-index': 400
            })
            // $(".container").css('height', '9.22rem')


        } else {
            $(".mobi_nav").css({
                'position': 'static',
                // 'margin-top': '0.48rem',
                'z-index': 'auto'

            })
            $(".mobi_nav").css("position", "static");
            // $(".container").css('height', '9.6rem')
            $(".mobi_nav").css("z-index", "auto");
        }
    });
});

//部门展示部分
$(".balls>div").click(function() {
    // bdclose();
    //阻止事件冒泡
    event.stopPropagation();
    var index = $(".balls>div").index(this);
    $(".texts div").eq(index).show();


    return false;

})

$(document).click(function(event) {
    var _con = $(".texts div"); // 设置目标区域
    if (!_con.is(event.target) && _con.has(event.target).length === 0) { // Mark 1
        $(".texts div").hide();
    }
});


// 作品展示部分

$(".pagewrap ul li").click(function() {
    $(".pagewrap ul li").index(this);
    $(".pagewrap ul li").removeClass("pageselected");
    $(this).addClass("pageselected");
})

//添加作品
// addwork();
function addwork() {


    var obj = {
        url: 'http://5x735a.natappfree.cc/api/workshow/',
        method: 'GET',
        dataType: 'Default: Intelligent Guess',
        async: true

    }
    promisesetajax(obj).then(function(data) {
            if (data.success) {

                var str = "";
                //先清空
                $(".workwarp").children().remove();
                console.log()


                for (var i = 0, m = data.workshows.length; i < m; i++) {


                    str += ` <div class="work clearfix">
                <div class="imgwrap"><a href="${data.workshows[i].link}"><img src="${data.workshows[i].pic}" alt=""></a></div>
                <div class="workname">${data.workshows[i].name}</div>
            </div>`

                }
                $(".workwarp").append(str);



            } else {
                alert("发生错误！");
            }
        },
        function(error) {
            alert("发生错误：" + error);

        })


}


//留言板部分


var HEAD_SIZE = $(".headamount").val() - 0; //记录头像的个数
var headimg = 1; //默认显示第一个头像
//点击头像切换头像
$(".header").click(function() {
    if (headimg == HEAD_SIZE) {
        headimg -= HEAD_SIZE;
    }
    headimg++;
    headshow();


})

function headshow() {
    $(".write .head_c li").eq(headimg - 1).show().siblings().hide();
}


$(".make_comment").click(function() {
    changeverify();
    $(".write").show();
})

$(".write .close").click(function() {
    $(".write").hide();
})

var Iscomment = false,
    Isverify = false,
    Isid = false;
//id输入 ??字数限制呢
var flag1 = 0;
$(".write .id input").on({

    focus: function() {
        if (!Isid && $(".write .id input").val() == '') {
            Isid = true;
        }
    },
    keyup: function(event) {

        if ($(this).prop('comStart1')) {
            flag1++;
            return;
        }


        if ($(".write .id input").val().length > 8 && event.keyCode != 8) {
            alert("昵称太长了！");


            $(".write .id input").val($(".write .id input").val().substring(0, 8));

        }
    },
    onpaste: function() {
        var textArea = $(this);
        setTimeout(function() {
            console.log(textArea.val());
        }, 200);
    },

    compositionstart: function() {
        $(this).prop('comStart1', true);
        // console.log("zhongwen")
    },
    compositionend: function() {
        $(this).prop('comStart1', false);
        // console.log("zhongwe3ndn")

    }
})
//留言框判断
//如果用户自己发起删除不应该判断为超出
$(".write textarea").on({

    focus: function() {
        if (!Iscomment && $(".write textarea").val() == '') {
            Iscomment = true;
        }
    },

    keyup: function(event) {
        if ($(this).prop('comStart')) return;

        if ($(".write textarea").val().length > 80 && event.keyCode != 8) {
            alert("字数太多了！");
            $(".write textarea").val($(".write textarea").val().substring(0, 80));

        }
    },
    compositionstart: function() {
        // console.log("zhongwen")
        $(this).prop('comStart', true);
    },
    compositionend: function() {
        // console.log("zhongwenedn")
        $(this).prop('comStart', false);
    }
})

//验证码输入部分
$(".verify input").on({
    focus: function() {
        if (!Isverify && $(".verify input").val() == '') {
            Isverify = true;
        }
    }
})

//提交留言表单
$(".write .submit").click(function() {

    if (!Iscomment) {
        alert("留言不能为空！");
        changeverify();
    } else if (!Isverify) {
        alert("请输入验证码！");
        changeverify();
    } else if ($(".write .id input").val() == '') {
        alert("请输入昵称！");
        changeverify();
    } else if ($(".write .id input").val() > 8 || $(".write textarea").val().length > 80) {
        alert("字数超限!");
        $(".write .id input").val($(".write .id input").val().substring(0, 8));
        $(".write textarea").val($(".write textarea").val().substring(0, 80));

    } else {



        $.ajax({
            type: "POST",
            url: "/api/comment/submit",
            timeout: 5000,
            data: {
                content: $(".write textarea").val(),
                nickName: $(".id input").val(),
                head: $(".write .head_c li").eq(headimg - 1).val(),
                identify: $(".verify input").val(),
            },
            dataType: "json",
            //发送成功可以返回的东西
            success: function(data) {
                if (data.statusC == 1) {
                    alert("留言提交失败！");
                    changeverify();

                } else if (data.statusC == 2) {
                    alert("验证码错误！");
                    changeverify();
                } else if (data.statusC == 0) {
                    alert("留言发表成功!");
                    close_comment();
                    location.reload();
                }
            },
            error: function(jqXHR) {
                // alert("服务器错误请重试，错误代码：" + jqXHR.status);
                alert("留言提交失败！");
            },
        });

    }
})



//滚动条插件


$(window).on("load", function() {
    $(".index_topic").mCustomScrollbar();



});

//滚动条滑到底的事件！！
$(".index_topic").mCustomScrollbar({

    callbacks: {
        whileScrolling: function() {
            if (parseInt($(".mCSB_draggerContainer").height()) - parseInt($(".mCSB_dragger").css("top")) - parseInt($(".mCSB_dragger").css("height")) < "4") {

                addcomment();
            }

        }
    }
})

$("#ident").click(function() {
    changeverify();
});
//更换验证码事件
function changeverify() {
    $("#ident").attr('src', '/api/identifyPic?time=' + Math.random());
}


function xssdf(value) {
    return $('<div/>').text(value).html();
}
//添加评论的方式
lasttime = new Date().getTime();
var firstTime = true;
// addcomment();

function addcomment() {
    // var firstTime = false;
    var code;
    if (firstTime) {
        code = 0;
        firstTime = false;
    } else {
        code = $(".index_topic .comments:last-child").attr('id')

        var nowtime = new Date().getTime();
        if (nowtime - lasttime < 2000) {
            return;
        } else {
            lasttime = nowtime;
        }
    }

    var obj = {
        url: '/api/comment/get?code=' + code,
        method: 'GET',
        dataType: 'Default: Intelligent Guess',
        async: true

    }
    promisesetajax(obj).then(function(data) {
            var str = "";
            if (data.comment == '[]') {
                $(".out_tip").show();
            } else {

                for (var i = 0, m = data.comment.length; i < m; i++) {

                    if (data.comment[i].admin == '' || data.comment[i].admin == null) {
                        str += "<div class=\"comments clearfix\" id=\"" + data.comment[i].code + "\">\n\t         \t\t\t \t<div class=\"head_c\"><img src=\"" + data.comment[i].head + "\" alt=\"\" /></div>\n\t          \t\t\t\t<div class=\"right clearfix\">\n\t\t\t\t            <div class=\"clearfix\" >\n\t\t\t\t              \t<div class=\"id\">" + xssdf(data.comment[i].nickname) + ("</div>\n\t\t\t\t             \t <div class=\"time\">" + data.comment[i].createTime + "</div>\n\t\t\t\t            </div>\n\t\t\t\t            <p>") + xssdf(data.comment[i].content) + "</p>\n\t\t\t\t          \t</div>\n\t\t\t        \t</div>\n        ";
                    } else {

                        str += "<div class=\"comments clearfix\" id=\"" + data.comment[i].code + "\">\n\t         \t\t\t \t<div class=\"head_c\"><img src=\"" + data.comment[i].head + "\" alt=\"\" /></div>\n\t          \t\t\t\t<div class=\"right clearfix\">\n\t\t\t\t            <div class=\"clearfix\" >\n\t\t\t\t              \t<div class=\"id\">" + xssdf(data.comment[i].nickname) + ("</div>\n\t\t\t\t             \t <div class=\"time\">" + data.comment[i].createTime + "</div>\n\t\t\t\t            </div>\n\t\t\t\t            <p>") + xssdf(data.comment[i].content) + ("</p>\n\t\t\t\t            <div class=\"adminreply clearfix\">\n\t\t\t\t                <span>\u56DE\u590D\uFF1A</span>\n\t\t\t\t                <span> " + data.comment[i].admin + "</span>\n\t\t\t\t              </div> \n\t\t\t\t          \t</div>\n\t\t\t        \t</div>\n        ");
                    }


                }
                $("#mCSB_1_container").append(str);


            }
        },
        function(error) {

        })

}