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
	
	//section水平切换
	$(".detail_nav>ul>li a").hover(function(){
		$(this).css("background-color","transparent");
	},function(){
		$(this).css("background-color","transparent");
	})
	$(".detail_nav>ul>li a").click(function(){
		$(this).addClass("select_tab_chg");
		$(this).parent().siblings().children("a").removeClass("select_tab_chg");
	})
	$(".nav_hide_common>a").hover(function(){
		$(this).css("background-color","transparent");
	},function(){
		$(this).css("background-color","transparent");
	})
	$(".nav_hide_common>a").click(function(){
		$(this).addClass("select_tab_chg");
		$(this).css("background-color","white");
		$(this).parent().siblings().children("a").removeClass("select_tab_chg");
	})
	
	$(".nav_eception1").hover(function(){
		$(this).css("background-color","white");
		$(".qr_scan").show();
	},function(){
		$(this).css("background-color","#f2f3f4");
		$(".qr_scan").hide();
	})
	
	$(".nav_eception2").hover(function(){
		$(this).css("background-color","white");
		$(".qr_scan2").show();
	},function(){
		$(this).css("background-color","#f2f3f4");
		$(".qr_scan2").hide();
	})
	//section竖直切换
//	$(".vert_1").click(function(){
//		$(this).addClass("vert_chg");
//	})
//	$(".vert_2").click(function(){
//		$(this).addClass("vert_chg");
//	})
//	$(".vert_3").click(function(){
//		$(this).css("background-position-y","-242px")
//	})
//	$(".vert_4").click(function(){
//		$(this).css("background-position-y","-242px")
//	})
	
	
    $(window).scroll(function(){
		if($(window).scrollTop()>1400){
			$(".nav_hide").show(100);
			$(".detail_2ndR>div>ul").show(100);
		}else{
			$(".nav_hide").hide(100);
			$(".detail_2ndR>div>ul").hide(100);
		}
	})
    
    $(".comment_img_small").click(function(){
    	$(this).css("border-color","#f23d6a");
    	$(this).siblings(".comment_img_big").toggle(200);
    })
    $(".comment_img_big").click(function(){
    	$(this).toggle();
    	$(this).siblings(".comment_img_small").css("border-color","#f2f2f2")
    })
    //评论切换
    $(".comm_hot").click(function(){
//  	alert("aa")
    	$(".comment_content2").show();
    	$(".comment_content2").siblings().hide();
    })

	$(".comm_time").click(function(){
		$(".comment_content1").show();
    	$(".comment_content1").siblings().hide();
	})
	$(".comm_whole").click(function(){
		$(".comment_content3").show();
    	$(".comment_content3").siblings().hide();
	})
	$(".comm_more").click(function(){
		$(".comment_content4").show();
    	$(".comment_content4").siblings().hide();
	})
	$(".comm_img").click(function(){
		$(".comment_content5").show();
    	$(".comment_content5").siblings().hide();
	})
	
	//套餐切换
	$(".ill_select_1").click(function(){
		$(this).children(".ill_select_arrow").show();
		$(this).css({"background-color":"#ffc900","border-color":"#ffc900"});
		$(this).siblings().css({"background-color":"#f5f5f5","border-color":"#ccc"})
		$(this).siblings().children(".ill_select_arrow").hide();
		$(".ill_bott1").siblings().hide();
		$(".ill_bott1").show();
	})
	$(".ill_select_2").click(function(){
		$(this).children(".ill_select_arrow").show();
		$(this).css({"background-color":"#ffc900","border-color":"#ffc900"});
		$(this).siblings().css({"background-color":"#f5f5f5","border-color":"#ccc"})
		$(this).siblings().children(".ill_select_arrow").hide();
		$(".ill_bott2").show();
		$(".ill_bott2").siblings().hide();
	})
	$(".ill_select_3").click(function(){
		$(this).children(".ill_select_arrow").show();
		$(this).css({"background-color":"#ffc900","border-color":"#ffc900"});
		$(this).siblings().css({"background-color":"#f5f5f5","border-color":"#ccc"})
		$(this).siblings().children(".ill_select_arrow").hide();
		$(".ill_bott3").siblings().hide();
		$(".ill_bott3").show();
	})
	$(".ill_select_4").click(function(){
		$(this).children(".ill_select_arrow").show();
		$(this).css({"background-color":"#ffc900","border-color":"#ffc900"});
		$(this).siblings().css({"background-color":"#f5f5f5","border-color":"#ccc"})
		$(this).siblings().children(".ill_select_arrow").hide();
		$(".ill_bott4").siblings().hide();
		$(".ill_bott4").show();
	})
	$(".ill_select_5").click(function(){
		$(this).children(".ill_select_arrow").show();
		$(this).css({"background-color":"#ffc900","border-color":"#ffc900"});
		$(this).siblings().css({"background-color":"#f5f5f5","border-color":"#ccc"})
		$(this).siblings().children(".ill_select_arrow").hide();
		$(".ill_bott5").siblings().hide();
		$(".ill_bott5").show();
	})
	$(".ill_select_6").click(function(){
		$(this).children(".ill_select_arrow").show();
		$(this).css({"background-color":"#ffc900","border-color":"#ffc900"});
		$(this).siblings().css({"background-color":"#f5f5f5","border-color":"#ccc"})
		$(this).siblings().children(".ill_select_arrow").hide();
		$(".ill_bott6").siblings().hide();
		$(".ill_bott6").show();
	})
	
	
	
	
})
