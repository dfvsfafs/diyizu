$(document).ready(function(){
	$("#choose_loginType label").click(function(){
		var $label = $("#choose_loginType label");
		for (var i=0;i< $label.length;i++){
			$label.eq(i).removeClass("logintype_active");
		}
		$(this).addClass("logintype_active");
	})
})