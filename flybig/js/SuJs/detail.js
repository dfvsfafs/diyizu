$(function(){
	//日期选择器
	
	
	//数量
	
	$(".btn_up").click(function(){
		$a=$(".count>input").val();
//		alert($a);
		$a++;
		$(this).parent().children("input").val($a);
	})
	$(".btn_down").click(function(){
		$a=$(".count>input").val();
//		alert($a);
		$a--;
		if($a>0){
			$(this).parent().children("input").val($a);			
		}else{
			return false;
		}
	})
	
	//套餐选择
	$(".type").click(function(){
		$(this).parent("p").children(".type").children("i").hide();
		$(this).parent("p").children(".type").children("span").css("border-color","#e0e0e0");
		$(this).children("i").show();
		$(this).children("span").css("border-color","orangered");

	})
	
 
    
    
    $(window).scroll(function(){
		if($(window).scrollTop()>1400){
			$(".nav_hide").show(100);
			$(".detail_2ndR>div>ul").show(100);
		}else{
			$(".nav_hide").hide(100);
			$(".detail_2ndR>div>ul").hide(100);
		}
	})
})
