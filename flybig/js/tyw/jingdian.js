$(document).ready(function(){
	$(".main-topl-1").hover(function(){
		$(".list").show();
	},function(){
		$(".list").hide();
	})
		
//	选项卡开始
			$(".guonei-conr nav ul li").click(function(){
			var	a = $(this).index();
			//alert(a)
		    $(this).parent().parent().next().children().eq(a).show().siblings().hide();	
		   
			})
//选项卡结束
	
})	