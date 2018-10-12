$(document).ready(function(){
	
	//中间第一部分选项卡centent_frist_l_a
	$(".centent_frist_l_a ul li").click(function(){
		$(this).addClass("centent_frist_l_a_hot").siblings().removeClass("centent_frist_l_a_hot");
		var $a = $(this).index();
		$(this).parent().parent().next().children().eq($a).show().siblings().hide();
	})
	
	
})