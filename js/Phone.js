// $(document).on("pagecreate","#allcontainer",function(){


W = document.documentElement.clientWidth; //获得窗口宽度
H = document.documentElement.clientHeight; //获得窗口高度
$(window).resize(function() {
    W = document.documentElement.clientWidth; //获得窗口宽度
    H = document.documentElement.clientHeight; //获得窗口高度  
    $(".cover").height(H);
})
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


//神奇流星
function liuxin() {

    var l1 = Math.random() * 5 + 1;
    var h1 = Math.random() * 3 + 1;
    $(".hx").eq(0).css({
        'left': 0,
        'top': l1 + 'rem'
    })
    $(".hx").eq(1).css({
        'left': h1 + 'rem',
        'top': 0
    })
    $(".hx").eq(0).animate({
        'left': '5.4rem',
        'top': (l1 + 5.4) + 'rem'
    }, 2000)
    $(".hx").eq(1).animate({
        'left': (h1 + 5.4) + 'rem',
        'top': '5.4rem'
    }, 2000)
}
liuxin();
setInterval(function() {
    // alert("55");
    liuxin();
}, 4000);
//导航栏点击部分
$(".menu").click(function(event) {
    $(".cover").height(H);
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
//点击导航栏实现响应跳转定位
$(".openmenu li").mouseover(function(event) {
    $(this).css({
        'background-color': '#74bee1',
        'color': '#ffffff'
    })
});
$(".openmenu li").mouseout(function(event) {
    $(this).css({
        'background-color': '#ffffff',
        'color': '#000000'
    })
});
$(".openmenu li").click(function() {
        var index = $(".openmenu li").index(this);

        // $("html").animate({scrollTop:$("#Anchor2").offset().top},1000)
        if (index != 6) {
            location.href = "#Anchor" + (index + 1);
        } else {
            location.href = '/fresher/newM/';
        }
        //您可以在这里写报名表的url
        $(".openmenu").hide();
        $(".cover").hide();



    })


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

// var a, b, c ,d , e ,f;
// a = $("#Anchor1").offset().top;
// b = $("#Anchor2").offset().top;
// c = $("#Anchor3").offset().top;
// d = $("#Anchor4").offset().top;
// e = $("#Anchor5").offset().top;
// f = $("#Anchor6").offset().top;
// $(window).resize(function(){
//     a = $("#Anchor1").offset().top;
//     b = $("#Anchor2").offset().top;
//     c = $("#Anchor3").offset().top;
//     d = $("#Anchor4").offset().top;
//     e = $("#Anchor5").offset().top;
//     f = $("#Anchor6").offset().top;
// })

// a = $(window).height(); //浏览器窗口高度  
// var group = $("h2");
$(window).scroll(function() {
    var t = $(this).scrollTop(); //页面滚动的高度  
    // c = group.offset().top;
    //元素距离文档（document）顶部的高度
    $(".cover").css({
        'top': t
    })


    //滚动的时候头部导航栏消失

});

// $(document).on("scrollstart", function() {
//     alert("开始滚动!");
// });

// $(document).on("scrollstop", function() {
//     alert("停止滚动!");
// });
// })

//首页部分



//首页背景
function moveyellow() {
    $(".planet_yellow").animate({
        'top': '4.355rem'
    }, 4000, function(){
        $(".planet_yellow").animate({
            'top': '4.255rem'

        }, 4000)
    
    setTimeout(function() {
        moveyellow();
    }, 1000)
})
}
moveyellow();
function movehuan() {
    $(".planet_huan").animate({
        'left': '0.435rem',
            'top': '4.315rem'
    }, 5000, function(){
        $(".planet_huan").animate({
            'left': '0.235rem',
            'top': '4.115rem'

        }, 5000)
    
    setTimeout(function() {
        movehuan();
    }, 700)
})
}
movehuan();
function moveblue() {
    $(".planet_blue").animate({
        'left': '0.54rem'
    }, 4000, function(){
        $(".planet_blue").animate({
            'left': '0.44rem'

        }, 4000)
    
    setTimeout(function() {
        moveblue();
    }, 1000)
})
}
moveblue();
// 点击小圆切换事件

$(".topics>div").click(function() {
    var index = $(".topics>div").index(this);
    $topic = $(".topics>div");
    $topic.removeClass('yuanselect');
    $topic.eq(index).addClass('yuanselect');

    //切换对应的文字框
    $(".indextext>div").hide();
    $(".indextext>div").eq(index).show();

    $("html,body").animate({
        scrollTop: $("#introAnchor").offset().top
    }, 1000)

    // location.href = "#introAnchor";
})

//部门展示部分


$(".balls>div").click(function(event) {

    // bdclose();
    //阻止事件冒泡
    event.stopPropagation();
    var index = $(".balls>div").index(this);
    $(".texts div").eq(index).show();
    location.href = "#Anchor2";

    return false;

})

$(".DEcontainer").click(function(event) {
    var _con = $(".texts div"); // 设置目标区域
    if (!_con.is(event.target) && _con.has(event.target).length === 0) { // Mark 1
        $(".texts div").hide();
    }

});


// 作品展示部分

// $(".pagewrap ul li").click(function() {

//     $(".pagewrap ul li").index(this);
//     $(".pagewrap ul li").removeClass("pageselected");
//     $(this).addClass("pageselected");

// })
$(".workaddwrap").on("click", ".workadd", function() {

    addmorework();
})

//添加作品
addwork();

function addwork() {

    $(".workwarp").children().remove();
    var obj = {
        url: '/api/workshow/',
        method: 'GET',
        dataType: 'Default: Intelligent Guess',
        async: true

    }
    promisesetajax(obj).then(function(data) {
            if (data.success) {

                var str = "";
                //先清空


                if (data.workshows.length > 3) {
                    for (var i = 0, m = 3; i < m; i++) {
                        str += " <div class=\"work clearfix\">\n                        <div class=\"imgwrap\"><a href=\"" + data.workshows[i].link + "\"><img src=\"/image/" + data.workshows[i].pic + "\" alt=\"\"></a></div>\n                        <div class=\"workname\">" + data.workshows[i].name + "</div>\n                    </div>";

                        //     str += ` <div class="work clearfix">
                        //     <div class="imgwrap"><a href="${data.workshows[i].link}"><img src="${data.workshows[i].pic}" alt=""></a></div>
                        //     <div class="workname">${data.workshows[i].name}</div>
                        // </div>`

                    }
                    $(".workaddwrap").css('display', 'block');
                } else {
                    for (var i = 3, m = data.workshows.length; i < m; i++) {
                        str += " <div class=\"work clearfix\">\n                        <div class=\"imgwrap\"><a href=\"" + data.workshows[i].link + "\"><img src=\"/image/" + data.workshows[i].pic + "\" alt=\"\"></a></div>\n                        <div class=\"workname\">" + data.workshows[i].name + "</div>\n                    </div>";

                        //     str += ` <div class="work clearfix">
                        //     <div class="imgwrap"><a href="${data.workshows[i].link}"><img src="${data.workshows[i].pic}" alt=""></a></div>
                        //     <div class="workname">${data.workshows[i].name}</div>
                        // </div>`

                    }
                    $(".workaddwrap").css('display', 'none');
                }


                $(".workwarp").append(str);



            } else {
                alert("发生错误！");
            }
        },
        function(error) {
            alert("发生错误!");

        })


}


function addmorework() {

    var obj = {
        url: '/api/workshow/',
        method: 'GET',
        dataType: 'Default: Intelligent Guess',
        async: true

    }
    promisesetajax(obj).then(function(data) {
            if (data.success) {

                var str = "";
                //先清空



                for (var i = 3, m = data.workshows.length; i < m; i++) {
                    str += " <div class=\"work clearfix\">\n                <div class=\"imgwrap\"><a href=\"" + data.workshows[i].link + "\"><img src=\"/image/" + data.workshows[i].pic + "\" alt=\"\"></a></div>\n                <div class=\"workname\">" + data.workshows[i].name + "</div>\n            </div>";


                    //         str += ` <div class="work clearfix">
                    //     <div class="imgwrap"><a href="${data.workshows[i].link}"><img src="${data.workshows[i].pic}" alt=""></a></div>
                    //     <div class="workname">${data.workshows[i].name}</div>
                    // </div>`

                }
                $(".workwarp").append(str);
                $(".workaddwrap").css('display', 'none');



            } else {
                alert("发生错误！");
            }
        },
        function(error) {
            alert("发生错误!");

        })


}

// 爱特大事记
// 闪烁
function word() {
    $(".eventword").animate({
        'opacity': '0'
    }, 1000, function() {
        $(".eventword").animate({
            'opacity': '100'
        }, 1000)
    })
    setTimeout(function() {
        word();
    }, 2000)

}
word();
$(".event .close").click(function() {
    var index = $(".years ul li").index($(".eventselect"));
    var left = parseFloat($(".eventselect").css('margin-right')) / 2;
    var right = parseFloat($(".eventselect").css('margin-left')) / 2;
    if ((index + 1) % 2 == 0) {
        $(".event").animate({
            'margin-left': '-5.4rem'
        }, 1000);
        $(".eventselect").animate({
            'margin-right': right
        }, 1000, function() {
            $(".eventselect").removeAttr('style');
            $(".years ul li").removeClass("eventselect");
            $(".event").hide();
            eventflag = true;
        });

    } else {
        $(".event").animate({
            'margin-left': '5.4rem'
        }, 1000);
        $(".eventselect").animate({
            'margin-left': left
        }, 1000, function() {
            $(".eventselect").removeAttr('style');
            $(".years ul li").removeClass("eventselect");
            $(".event").hide();
            eventflag = true;
        });

    }

    $(".EVcontainer").height("8.52rem");



})
var eventflag = true;


$(".years ul li").click(function() {
    if (eventflag) {


        eventflag = false;
        $(this).addClass("eventselect");
        var index = $(".years ul li").index(this);
        displayevent(index);
        if ((index + 1) % 2 == 0) {
            $(".event").css({
                'margin-left': '-5.4rem'
            })

            $(".event").show();
            $(".event").animate({
                'margin-left': '0'
            }, 1000);
            $(".eventselect").animate({
                'margin-right': '0'
            }, 1000);
        } else {
            $(".event").css({
                'margin-left': '5.4rem'
            })

            $(".event").show();
            $(".event").animate({
                'margin-left': '0'
            }, 1000);
            $(".eventselect").animate({
                'margin-left': '0'
            }, 1000);

        }
        $(".event").css({
            'margin-left': '5.4rem'
        })
        location.href = "#Anchor4";

    }


})

$(".eventaddwrap").on("click", ".eventadd", function() {
    var index = $(".event .year").text();
    displayeventmore(index);


})


function displayevent(index) {
    $(".year").html(index + 2014);
    $(".event ul").children().remove();
    var obj = {
        url: '/api/event/get?year=' + (index + 2014),
        method: 'GET',
        data: {
            year: index + 2014
        },
        dataType: 'Default: Intelligent Guess',
        async: true

    }


    promisesetajax(obj).then(function(data) {


            //先把内容清空

            var str = "";
            if (data.success) {

                if (data.events.length > 4) {
                    for (var i = 0, m = 4; i < m; i++) {
                        // str += `<li class="clearfix">
                        //     <div class="num">` + (i + 1) + `</div>
                        //     <div class="content">
                        //         <div>${data.events[i].name}</div>
                        //         <div>${data.events[i].content}</div>
                        //     </div>
                        // </li>`
                        str += "<li class=\"clearfix\">\n                            <div class=\"num\">" + (i + 1) + ("</div>\n                            <div class=\"content\">\n                                <div>" + data.events[i].name + "</div>\n                                <div>" + data.events[i].content + "</div>\n                            </div>\n                        </li>");

                    }

                    $(".eventaddwrap").css('display', 'block');
                } else {
                    for (var i = 0, m = data.events.length; i < m; i++) {
                        str += "<li class=\"clearfix\">\n                            <div class=\"num\">" + (i + 1) + ("</div>\n                            <div class=\"content\">\n                                <div>" + data.events[i].name + "</div>\n                                <div>" + data.events[i].content + "</div>\n                            </div>\n                        </li>");
                        // str += `<li class="clearfix">
                        //     <div class="num">` + (i + 1) + `</div>
                        //     <div class="content">
                        //         <div>${data.events[i].name}</div>
                        //         <div>${data.events[i].content}</div>
                        //     </div>
                        // </li>`

                    }
                    $(".eventaddwrap").css('display', 'none');

                }



                // for (var i = 0, m = data.events.length; i < m; i++) {

                // console.log(data.events[0].name)
                // str += `

                //  <div class="event">
                //      <div>${data.events[i].name}</div>
                //      <div>${data.events[i].content}</div>

                //  </div>

                //           `

                // }



                $(".event ul").append(str);



            } else {
                alert("发生错误！");
            }

        },
        function(error) {
            alert("发生错误!");
        })


}

function displayeventmore(index) {
    var obj = {
        url: '/api/event/get?year=' + index,
        method: 'GET',
        data: {
            year: index
        },
        dataType: 'Default: Intelligent Guess',
        async: true

    }


    promisesetajax(obj).then(function(data) {
            //先把内容清空

            var str = "";
            if (data.success) {


                for (var i = 4, m = data.events.length; i < m; i++) {
                    str += "<li class=\"clearfix\">\n                        <div class=\"num\">" + (i + 1) + ("</div>\n                        <div class=\"content\">\n                            <div>" + data.events[i].name + "</div>\n                            <div>" + data.events[i].content + "</div>\n                        </div>\n                    </li>");
                    // str += `<li class="clearfix">
                    //     <div class="num">` + (i + 1) + `</div>
                    //     <div class="content">
                    //         <div>${data.events[i].name}</div>
                    //         <div>${data.events[i].content}</div>
                    //     </div>
                    // </li>`

                }

                $(".eventaddwrap").css('display', 'none');
                $(".event ul").append(str);
                // setTimeout(function(){
                var h = $('.event').height();
                var h2 = $(".mobi_nav").height();
                // alert($('.event').height());
                $(".EVcontainer").height(h + h2);
                // }) 



            } else {
                alert("发生错误！");
            }

        },
        function(error) {
            alert("发生错误!");
        })


}

// 成员展示部分

// 蒙版
$(".members").on("click", ".meimgwrap", function() {
    var index = $(".meimgwrap").index(this);
    $mchoose = $(".members .mecover").eq(index);
    if ($mchoose.css('display') == 'block') {
        $mchoose.hide();
    } else {
        $(".members .mecover").hide();
        // $(".members .mecover").eq(indexs).toggle();
        $(".members .mecover").eq(index).show();
    }

});

$(".circles li").click(function() {
    var index = $(this).attr('id');
    $(".members").show();
    addmember(index);
    location.href = "#Anchor5";
})

$(".members .close").click(function() {
    $(".members").hide();
    $(".MEcontainer").height("8.52rem");
})

function addmember(index) {
    $(".members .year").html(index);
    $(".members ul").children().remove();

    var obj = {
        url: '/api/member/' + (index),
        method: 'GET',
        dataType: 'Default: Intelligent Guess',
        async: true

    }
    promisesetajax(obj).then(function(data) {
            if (data.success) {

                var str = "";
                //先清空



                for (var i = 0, m = data.members.length; i < m; i++) {
                    str += " \n                    <li>\n                    <div class=\"meimgwrap\">\n                        <div class=\"mecover\">\n                            <p>" + data.members[i].intro + "</p>\n                        </div>\n                        <img class=\"img\" src=\"/image/" + data.members[i].photo + "\" alt=\"\">\n\n                    </div>\n                    <div class=\"text clearfix\">\n                        <span class=\"name\">" + data.members[i].name + "</span>\n                        <span class=\"depart\">" + data.members[i].department + "</span>\n                    </div>\n                </li>";


                    //     str += ` 
                    //     <li>
                    //     <div class="meimgwrap">
                    //         <div class="mecover">
                    //             <p>${data.members[i].intro}</p>
                    //         </div>
                    //         <img class="img" src="/image/${data.members[i].photo}" alt="">

                    //     </div>
                    //     <div class="text clearfix">
                    //         <span class="name">${data.members[i].name}</span>
                    //         <span class="depart">${data.members[i].department}</span>
                    //     </div>
                    // </li>`

                }

                $(".members ul").append(str);
                var h = $(".members").height();
                var h2 = $(".mobi_nav").height();
                $(".MEcontainer").height(h + h2);
                // $(".workaddwrap").css('display', 'none');



            } else {
                alert("发生错误！");
            }
        },
        function(error) {
            alert("发生错误!");

        })


}

//留言板部分


var HEAD_SIZE = $(".headamount").val() - 0; //记录头像的个数
var headimg = 1; //默认显示第一个头像
//点击头像切换头像
$(".header .head_c li").click(function() {
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
    $(".commentwrap").hide();
    $(".comment_button").hide();
    changeverify();
    $(".write").show();
    location.href = "#Anchor6";
})

function close_comment() {
    $(".write").hide();
    $(".commentwrap").show();
    $(".comment_button").show();
}
$(".write .close").click(function() {

    close_comment();
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

        // if ($(this).prop('comStart1')) {
        //     flag1++;
        //     return;
        // }


        if ($(".write .id input").val().length > 8 && event.keyCode != 8) {
            alert("昵称太长了！");


            $(".write .id input").val($(".write .id input").val().substring(0, 8));

        }
    }
    // },
    // onpaste: function() {
    //     var textArea = $(this);
    //     setTimeout(function() {
    //         // console.log(textArea.val());
    //     }, 200);
    // }
    // ,

    // compositionstart: function() {
    //     $(this).prop('comStart1', true);
    //     // console.log("zhongwen")
    // },
    // compositionend: function() {
    //     $(this).prop('comStart1', false);
    //     // console.log("zhongwe3ndn")

    // }
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
        // if ($(this).prop('comStart')) return;

        if ($(".write textarea").val().length > 80 && event.keyCode != 8) {
            alert("字数太多了！");
            $(".write textarea").val($(".write textarea").val().substring(0, 80));

        }
    }
    // ,
    // compositionstart: function() {
    //     // console.log("zhongwen")
    //     $(this).prop('comStart', true);
    // },
    // compositionend: function() {
    //     // console.log("zhongwenedn")
    //     $(this).prop('comStart', false);
    // }
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
    } else if ($(".write .id input").val().length > 8 || $(".write textarea").val().length > 80) {
        alert("字数超限!");
        $(".write .id input").val($(".write .id input").val().substring(0, 8));
        $(".write textarea").val($(".write textarea").val().substring(0, 80));
        changeverify();

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
                    // location.reload();
                    $(".commentwrap").children().remove();
                    addcomment();
                    $(".write textarea").val('');
                    $(".write .id input").val('');
                    $(".verify input").val('');


                }
            },
            error: function(jqXHR) {
                // alert("服务器错误请重试，错误代码：" + jqXHR.status);
                alert("留言提交失败！");
                changeverify();
            },
        });

    }
})



//滚动条插件


$(window).on("load", function() {
    // $(".index_topic").mCustomScrollbar();



});

//滚动条滑到底的事件！！
// $(".index_topic").mCustomScrollbar({

//     callbacks: {
//         whileScrolling: function() {
//             if (parseInt($(".mCSB_draggerContainer").height()) - parseInt($(".mCSB_dragger").css("top")) - parseInt($(".mCSB_dragger").css("height")) < "4") {

//                 addcomment();
//             }

//         }
//     }
// })

var addcflag = true;

$(".check_comment").click(function(event) {
    if (addcflag) {
        addcflag = false;
        addcomment();
        addcflag = true;
    }



});
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
addcomment();

function addcomment() {
    // var firstTime = false;
    var code;
    if (firstTime) {
        code = 0;
        firstTime = false;
    } else {
        code = $(".commentwrap .comments:last-child").attr('id')

        var nowtime = new Date().getTime();
        if (nowtime - lasttime < 2000) {
            return;
        } else {
            lasttime = nowtime;
        }
    }

    var obj = {
        url: '/api/comment/get?code=' + code + '&nums=5',
        method: 'GET',
        dataType: 'Default: Intelligent Guess',
        async: true

    }
    promisesetajax(obj).then(function(data) {
            var str = "";
            if (data.success) {


                if (data.comment == '[]') {
                    // $(".out_tip").show();
                    $(".check_comment").css({
                        'background-image': '',
                        'background-color': '#f7e8c6'
                    })
                    $(".check_comment").attr('disabled', 'true');
                } else {

                    for (var i = 0, m = data.comment.length; i < m; i++) {

                        if (data.comment[i].admin == '' || data.comment[i].admin == null) {
                            str += "<div class=\"comments clearfix\" id=\"" + data.comment[i].code + "\">\n\t         \t\t\t \t<div class=\"head_c\"><img src=\"" + data.comment[i].head + "\" alt=\"\" /></div>\n\t          \t\t\t\t<div class=\"right clearfix\">\n\t\t\t\t            <div class=\"clearfix\" >\n\t\t\t\t              \t<div class=\"id\">" + xssdf(data.comment[i].nickname) + ("</div>\n\t\t\t\t             \t <div class=\"time\">" + data.comment[i].createTime + "</div>\n\t\t\t\t            </div>\n\t\t\t\t            <p>") + xssdf(data.comment[i].content) + "</p>\n\t\t\t\t          \t</div>\n\t\t\t        \t</div>\n        ";
                        } else {

                            str += "<div class=\"comments clearfix\" id=\"" + data.comment[i].code + "\">\n\t         \t\t\t \t<div class=\"head_c\"><img src=\"" + data.comment[i].head + "\" alt=\"\" /></div>\n\t          \t\t\t\t<div class=\"right clearfix\">\n\t\t\t\t            <div class=\"clearfix\" >\n\t\t\t\t              \t<div class=\"id\">" + xssdf(data.comment[i].nickname) + ("</div>\n\t\t\t\t             \t <div class=\"time\">" + data.comment[i].createTime + "</div>\n\t\t\t\t            </div>\n\t\t\t\t            <p>") + xssdf(data.comment[i].content) + ("</p>\n\t\t\t\t            <div class=\"adminreply clearfix\">\n\t\t\t\t                <span>\u56DE\u590D\uFF1A</span>\n\t\t\t\t                <span> " + data.comment[i].admin + "</span>\n\t\t\t\t              </div> \n\t\t\t\t          \t</div>\n\t\t\t        \t</div>\n        ");
                        }


                    }
                    $(".commentwrap").append(str);



                }

            } else {


            }
        },
        function(error) {

        })

}

// })z