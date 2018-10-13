$(document).ready(function(){

//图片轮播
			var count = 0;
		    var timer = null;
		    //
		    function slide() {
		        $('.page_img li').eq(count).show().siblings().hide();
		        //$('.page_con li').eq(count).css('background', '#FE3C3A').siblings().css('background', '#CCCCCC');
		    	$('.page_con li').eq(count).css({"background":"#FE3C3A","color":"white"}).siblings().css({"background":"gray","color":"black"});
		    }
		    function time (){
		        count ++;
		        if(count >= $('.page_img li').length){
		            count = 0;
		        }
		        slide();
		    }
		    slide();
		    timer = setInterval(time, 1000);
		    $('.btn-l').click(function () {
		        count--;
		        if (count < 0) {
		            count = $('.page_img li').length - 1;
		        }
		        slide();
		    });
		    $('.btn-r').click(function () {
		        time();
		        return false;
		        
		    });
		    $('.page_con li').mouseenter(function () {
		        clearInterval(timer);
		        count = $(this).index();
		        slide();
		        return false;
		    });
		    $('#banner_center').mouseenter(function () {
		        $('#banner_center span').show();
		        clearInterval(timer);
		        return false;
		    });
		    $('#banner_center').mouseleave(function () {
		        $('#banner_center span').hide();
		        timer = setInterval(time, 1000);
		        return false;
		    });
		    
		    //轮播结束
		    
		//加边框 开始
//		    $(".main-topr22").hover(function(){
//		    	//alert("11")
//		    	$(this).css("border":"2px red solid");
//		    })
		//加边框结束
		    
 	// 选项卡
			$(".jingnei nav dl dd").click(function(){
			var	a = $(this).index();
//			alert(a)
		   $(this).parent().parent().next().children().eq(a).show().siblings().hide();	
		   
			})
	//选项卡结束
		    
})