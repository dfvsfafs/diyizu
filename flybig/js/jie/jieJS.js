$(document).ready(function(){
	
//	切换登录状态
	$("#choose_loginType label").click(function(){
		var $label = $("#choose_loginType label");
		for (var i=0;i< $label.length;i++){
			$label.eq(i).removeClass("logintype_active");
		}
		$(this).addClass("logintype_active");
	})
	
	$("#accountType").click(function(){
		$("#account_login").removeClass("div_hidden");
		$("#phone_login").addClass("div_hidden");
	})
	
	$("#phoneType").click(function(){
		$("#account_login").addClass("div_hidden");
		$("#phone_login").removeClass("div_hidden");
	})
	
	
	//切换注册状态
	$("#change_phone_reg").click(function(){
		$("#chang_email_reg").removeClass("div_hidden");
		$("#change_phone_reg").addClass("div_hidden");
		$("#email_reg").removeClass("div_hidden");
		$("#phone_reg").addClass("div_hidden");
	})
	
	$("#chang_email_reg").click(function(){
		$("#chang_email_reg").addClass("div_hidden");
		$("#change_phone_reg").removeClass("div_hidden");
		$("#phone_reg").removeClass("div_hidden");
		$("#email_reg").addClass("div_hidden");
	})
})