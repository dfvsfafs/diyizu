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
	
//	注册界面的输入判断
//手机号码的判断
	$("input[name='tel']").blur(function(){
		$val = $(this).val();
		$(this).parent().next().remove();
		if ($val == "") {
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 手机号码不能为空</span>';
			$(this).parent().parent().append($text);
		}else if($val.length < 11){
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 请输入正确的手机号码格式</span>';
			$(this).parent().parent().append($text);
		}else {
			$text = '<span class="tip"><img src="img/jie/icon_accept_v2.gif"/></span>';
			$(this).parent().parent().append($text);
		}
	})
	//邮箱格式判断
	$("input[name='email']").blur(function(){
		$val = $(this).val();
		$(this).parent().next().remove();
		var $pattern = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
		if ($val == "") {
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 邮箱不能为空</span>';
			$(this).parent().parent().append($text);
		}else if($pattern.test($val) == false){
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 请输入正确的邮箱地址</span>';
			$(this).parent().parent().append($text);
		}else {
			$text = '<span class="tip"><img src="img/jie/icon_accept_v2.gif"/></span>';
			$(this).parent().parent().append($text);
		}
	})
//密码框的判断
	$("input[name='pwd']").focus(function(){
		$(this).parent().next().remove();
		$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 密码由数字和英文字母组成，3-15位</span>';
		$(this).parent().parent().append($text);
	})
	
	$("input[name='pwd']").blur(function(){
		$val = $(this).val();
		$(this).parent().next().remove();
		var $pattern = /^[a-zA-Z0-9]+$/;
		if ($val == "") {
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 密码不能为空</span>';
			$(this).parent().parent().append($text);
		}else if($val.length < 3||$val.length>15){
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 密码不能少于3位，多于15</span>';
			$(this).parent().parent().append($text);
		}else if($pattern.test($val) == false){
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 密码格式不正确</span>';
			$(this).parent().parent().append($text);
		}else {
			$text = '<span class="tip"><img src="img/jie/icon_accept_v2.gif"/></span>';
			$(this).parent().parent().append($text);
		}
	})
	//验证码
	$("input[name='yzm']").blur(function(){
		$val = $(this).val();
		$(this).parent().next().remove();
		if ($val == "") {
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 验证码不能为空</span>';
			$(this).parent().parent().append($text);
		}else {
			$text = '<span class="tip"><img src="img/jie/icon_accept_v2.gif"/></span>';
			$(this).parent().parent().append($text);
		}
	})
	//激活码
	$("input[name='jhm']").blur(function(){
		$val = $(this).val();
		$(this).parent().next().remove();
		if ($val == "") {
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 激活码不能为空</span>';
			$(this).parent().parent().append($text);
		}else {
			$text = '<span class="tip"><img src="img/jie/icon_accept_v2.gif"/></span>';
			$(this).parent().parent().append($text);
		}
	})
	
	//登录界面的错误提示
	
	
})