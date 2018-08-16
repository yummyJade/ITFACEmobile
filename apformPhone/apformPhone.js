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


function promisesetajax(obj) {
	return new Promise(function(resolve, reject) {
		var request = new XMLHttpRequest();
		request.open(obj.method, obj.url, obj.async);
		if (obj.method == 'GET') {
			request.send();
		} else if (obj.method == 'POST') {
			request.send(obj.data);
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
H = $(window).height() || document.body.offsetHeight; //获得窗口宽度
W = $(window).width() || document.body.offsetWidth; //获得窗口高度
var p = 9.6/5.4

if(H/W>p)
{
	$(".container").height(H);
}

var Isname = false,
	Isprofession = false,
	Isqq = false,
	Isphone = false,
	Isintro = false,
	Isintention = false,
	Isemail = false,
	reg = new Array();

//姓名事件

$(".name").focus(function() {
	if (Isname == false) {
		$(this).val('')
	}

	$(this).css({
		"border-bottom": " 0.01rem solid #2a74a3",
		"color": "#2a74a3"
	})
})

$(".name").blur(function() {

	reg[0] = /^[\u4e00-\u9fa5]{2,10}$/;
	if (reg[0].test($(this).val()) == false) {
		$(this).val("请输入正确的姓名");
		$(this).css({
			"color": "#e81a33"
		})
		Isname = false;
	} else {
		$(this).css({
			'border-bottom': '0.01rem solid rgba(204, 204, 204, 0.6)'
		})
		Isname = true;
	}
})


//专业事件

$(".profession").focus(function() {
	if (Isprofession == false) {
		$(this).val('')
	}
	$(this).css({
		"border-bottom": " 0.01rem solid #2a74a3",
		"color": "#2a74a3"
	})
})

$(".profession").blur(function() {
	reg[4] = /^201[5678][\u4e00-\u9fa5]{2,15}$/;
	if (reg[4].test($(this).val()) == false) {
		$(this).val("请输入正确的年级/专业（例：2018药学");
		$(this).css({
			"color": "#e81a33"
		})
		Isprofession = false;
	} else {
		$(this).css({
			'border-bottom': '0.01rem solid rgba(204, 204, 204, 0.6)'
		})
		Isprofession = true;
	}
})


//qq号码事件
$(".qq").focus(function() {
	if (Isqq == false) {
		$(this).val('')
	}
	$(this).css({
		"border-bottom": " 0.01rem solid #2a74a3",
		"color": "#2a74a3"
	})
})

$(".qq").blur(function() {
	reg[1] = /^[1-9][0-9]{4,9}$/gim;
	if (reg[1].test($(this).val()) == false) {
		$(this).val("请输入正确的qq号码");
		$(this).css({
			"color": "#e81a33"
		})
		Isqq = false;
	} else {
		$(this).css({
			'border-bottom': '0.01rem solid rgba(204, 204, 204, 0.6)'
		})
		Isqq = true;
	}
})


//手机号
$(".phonenumber").focus(function() {
	if (Isphone == false) {
		$(this).val('')
	}
	$(this).css({
		"border-bottom": " 0.01rem solid #2a74a3",
		"color": "#2a74a3"
	})
})

$(".phonenumber").blur(function() {
	reg[2] = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
	if (reg[2].test($(this).val()) == false) {
		$(this).val("请输入正确的手机号");
		$(this).css({
			"color": "#e81a33"
		})
		Isphone = false;
	} else {
		$(this).css({
			'border-bottom': '0.01rem solid rgba(204, 204, 204, 0.6)'
		})
		Isphone = true;
	}
})
//验证邮箱信息


$(".email").focus(function() {
	if (Isemail == false) {
		$(this).val('')
	}
	$(this).css({
		"border-bottom": " 0.01rem solid #2a74a3",
		"color": "#2a74a3"
	})
})

$(".email").blur(function() {
	reg[3] = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	if (reg[3].test($(this).val()) == false) {
		$(this).val("请输入正确的邮箱号码");
		$(this).css({
			"color": "#e81a33"
		})
		Isemail = false;
	} else {
		$(this).css({
			'border-bottom': '0.01rem solid rgba(204, 204, 204, 0.6)'
		})
		Isemail = true;
	}
})



$(".intention ul li").click(function() {
	$(this).siblings().css({
		'backgroundColor': 'rgba(250, 250, 250, 0.96)',
		'color': '#458bac'
	}).removeClass('selected');
	$(this).css({
		'backgroundColor': '#458bac',
		'color': 'white'
	}).addClass('selected');
	Isintention = true;

})

//个人介绍事件
$(".introduction").focus(function() {
	$(".intro_tip").hide();
})

$(".introduction").blur(function() {
	$(".intro_tip").show();
	if ($(this).val().length > 0 && $(this).val().length < 200) {
		Isintro = true;
	} else {
		Isintro = false;
	}

})
$(".introduction").keydown(function(event) {
	if ($(this).val().length > 200 && event.keyCode != 8) {
		alert("字数太多了！");
		$(this).val($(this).val().substring(0, 200));

	}
})



//验证表单是否有空项


function check_form() {
	var apform = document.getElementById("apform");
	for (var i = 0; i < apform.elements.length - 2; i++) {
		if (apform.elements[i].value == "" && i != 6) {
			alert("报名表信息填写不完全!");
			apform.elements[i].focus();

			return false;
		}
	}
	return true;

}

function correct_form() {
	if (Isname == false || Isprofession == false || Isqq == false || Isphone == false || Isintro == false || Isintention == false || Isemail == false) {
		alert("请正确填写报名表信息!")
		return false;
	} else {

		return true;
	}


}


//先触发submit事件,判断一下表单是否为空
$(".apform").submit(function() {
	return false;
})



$(".apform_submit").click(function() {
	$(".apform_submit").attr('disabled','true')
	
	setTimeout(function(){
		$(".apform_submit").removeAttr('disabled')
	},3000)
		
	if (check_form() && correct_form()) {
		var wantdepart = $(".selected").val();
		$(".intention_choose").val(wantdepart);
		$.ajax({
			type: "POST",
			url: "/api/sign/submit",
			timeout: 5000,
			data: {
				name: $(".name").val(),
				yearAndMajor: $(".profession").val(),
				qq: $(".qq").val(),
				phone: $(".phonenumber").val(),
				email: $(".email").val(),
				wantDepartment: $(".intention_choose").val(),
				selfIntro: $(".introduction").val(),
			},
			dataType: "json",
			//发送成功可以返回的东西
			success: function(data) {
				if (data.statusC == 0) {
					alert("报名成功，请注意邮件查收!");
					window.location.href = "/home/index/"
				} else if (data.statusC == 5) {
					alert("该邮箱已提交三次申请，请更换邮箱再提交!");
				} else {
					alert("报名失败，请重试")
				}


				// $(".apform_submit").css({
				// 	'disabled': 'disabled'
				// })
				// setTimeout(function() {
				// 	$(".apform_submit").css({
				// 		'disabled': ''
				// 	})
				// }, 2000);

			},
			error: function(jqXHR) {
				alert("报名失败，请重试")
				// alert("表单提交失败:" + jqXHR.status);
				// if(jqXHR.status !=0)
				// 	alert("表单提交失败:" + jqXHR.status);
				// else
				// 	alert("表单提交成功，请注意邮件查收!");
			},
		});
	} else {
		return false;
	}



})



//----华丽丽的分割线


//点击查看进程
$(".apform_check").click(function() {
	$(".apform").hide();
	$(".verify").show();
});

//输入编号点击返回
$(".verify_back").click(function() {
	$('.verify').hide();
	$('.apform').show();
});


//在报名状态下点击返回，然后回到单号页面
$(".processform_return").click(function() {

	$(".processform").hide();
	$(".verify").show();
})



//
// $(".inputwrap input").val()
$(".verify_check").click(function() {

	if ($(".inputwrap input").val() == '') {
		alert('查询编号不可为空!');
	} else {
		var obj = {
			method: "GET",
			url: "/api/status/get?userCode=" +$(".inputwrap input").val() ,
			timeout: 5000,
			dataType: 'Default: Intelligent Guess',
			async: true
		}

		promisesetajax(obj).then(function(data) {
			if (data.success) {
				l = data.status.length;
				h = (2.24-0.1*l)/(l-1);
				if(l==2)
				{
					h=2.24/2;
				}
		

				// h = (0.32 * H * 0.83 - l * 0.034 * 0.32 * H) / (l - 1);
		
				$(".content").eq(0).html(data.name);
				$(".content").eq(1).html(data.major);
				$(".content").eq(2).html(data.wantDepart);
				$(".events").children().remove();
				$(".dots").children().remove();
				var str = '';
				var str2 = '';

				for (var i = 0; i < l; i++) {
					// str += `
					// 		<div class="event">
					// 			<span>${data.status[i].statusHappenTime}</span>
					// 			<span>${data.status[i].statusName}</span>

					// 		</div>


					// `

					str += "\n\t\t\t\t\t\t\t<div class=\"event\">\n\t\t\t\t\t\t\t\t<span>" + data.status[i].statusHappenTime + "</span>\n\t\t\t\t\t\t\t\t<span>" + data.status[i].statusName + "</span>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t";
					// str2 +=`<div class="dot"></div>`
					str2 += "<div class=\"dot\"></div>\n";
				}
				$(".events").append(str);
				$(".dots").append(str2);

				//为他们设置css
				for (var j = 0; j < l; j++) {
					$(".dot").eq(j).css({
						'top': 0.225 + j * 0.1 + h * j + 'rem'
					})
					$(".event").eq(j).css({
						'top': 0.225 + j * 0.1 + h * j + 'rem'
					})
				}



				// x = [0, 1, 2];
				// x.forEach(function(v) {
				// 	if (data.status[v])
				// 		$(".status" + x[2 - v].toString()).html("状态：" + data.status[v].statusName + "，发生于：" + data.status[v].statusHappenTime);
				// 	else {
				// 		$(".status" + x[2 - v].toString()).html("");
				// 	}
				// })
				$(".verify").hide();
				$(".processform").show();
			} else {
				alert("查询失败!");
			}
		}, function(error) {
			// alert("发生错误：" + error);
			alert("查询失败!");

		})
	}
});

