$(document).ready(function(){

	$(".sp1").click(function(){
		$(this).css("border-bottom","3px solid #e90");
		$(".sp2").css("border-bottom","none");
		$(".sp3").css("border-bottom","none");
	})
	$(".sp2").click(function(){
		$(this).css("border-bottom","3px solid #e90");
		$(".sp1").css("border-bottom","none");
		$(".sp3").css("border-bottom","none");
	})
	$(".sp3").click(function(){
		$(this).css("border-bottom","3px solid #e90");
		$(".sp1").css("border-bottom","none");
		$(".sp2").css("border-bottom","none");
	})
	$(".chg1").hover(function(){
		$(".chg1").attr('src','img/DJY/change1_2.jpg');
	},function(){
		$(".chg1").attr('src','img/DJY/change1_1.jpg');
	});
	
	
	$(".sp1").click(function(){
		$(".bigleftpage1").show();
		$(".bigleftpage2").hide();
		$(".bigleftpage3").hide();
		$(".bigleftpage4").hide();
		
	});
	$(".sp2").click(function(){
		$(".bigleftpage3").show();
		$(".bigleftpage1").hide();
		$(".bigleftpage2").hide();
		$(".bigleftpage4").hide();
		
	});
	$(".sp3").click(function(){
		$(".bigleftpage1").show();
		$(".bigleftpage3").hide();
		$(".bigleftpage2").hide();
		$(".bigleftpage4").hide();
	});
	$(".select1").click(function(){
		$(".bigleftpage1").show();
		$(".bigleftpage3").hide();
		$(".bigleftpage2").hide();
		$(".bigleftpage4").hide();
	});
	$(".select2").click(function(){
		$(".bigleftpage2").show();
		$(".bigleftpage1").hide();
		$(".bigleftpage3").hide();
		$(".bigleftpage4").hide();
	});
	$(".select3").click(function(){
		
		$(".bigleftpage2").hide();
		$(".bigleftpage4").hide();
		$(".bigleftpage3").show();
		$(".bigleftpage1").hide();
	});
	$(".select4").click(function(){
		$(".bigleftpage4").show();
		$(".bigleftpage1").hide();
		$(".bigleftpage2").hide();
		$(".bigleftpage3").hide();

	});
	$(".li1").click(function(){		
		$(".imgchg").attr('src','img/DJY/chgimg1.jpg');
		$(".li1").css("background","#f80");
		$(".li2").css("background","#8b8b8b");
		$(".li3").css("background","#8b8b8b");
		$(".li4").css("background","#8b8b8b");
	});
	$(".li2").click(function(){		
		$(".imgchg").attr('src','img/DJY/chgimg2.jpg');
		$(".li2").css("background","#f80");
		$(".li1").css("background","#8b8b8b");
		$(".li3").css("background","#8b8b8b");
		$(".li4").css("background","#8b8b8b");
	});
	$(".li3").click(function(){		
		$(".imgchg").attr('src','img/DJY/chgimg3.jpg');
		$(".li3").css("background","#f80");
		$(".li1").css("background","#8b8b8b");
		$(".li2").css("background","#8b8b8b");
		$(".li4").css("background","#8b8b8b");
	});
	$(".li4").click(function(){		
		$(".imgchg").attr('src','img/DJY/chgimg4.jpg');
		$(".li4").css("background","#f80");
		$(".li1").css("background","#8b8b8b");
		$(".li2").css("background","#8b8b8b");
		$(".li3").css("background","#8b8b8b");
	});
	$(".sp4").hover(function(){
		$(".extendsp4").show();
	},function(){
		$(".extendsp4").hide();
	});
	$(".extendsp4").hover(function(){
		$(".extendsp4").show();
	},function(){
		$(".extendsp4").hide();
	});
	$(".sp5").hover(function(){
		$(".extendsp5").show();
	},function(){
		$(".extendsp5").hide();
	});
	$(".extendsp5").hover(function(){
		$(".extendsp5").show();
	},function(){
		$(".extendsp5").hide();
	});
	$(".lii1").hover(function(){
		$(".imgg1").attr('src','img/DJY/li2.png');
		$(".lii1").css("background","#40bed1");
		$(".a1").css("color","white");
	},function(){
		$(".imgg1").attr('src','img/DJY/li1.jpg');
		$(".lii1").css("background","white");
		$(".a1").css("color","#40bed1");
	});
	$(".lii2").hover(function(){
		$(".imgg2").attr('src','img/DJY/li4.png');
		$(".lii2").css("background","#41b58f");
		$(".a2").css("color","white");
	},function(){
		$(".imgg2").attr('src','img/DJY/li3.jpg');
		$(".lii2").css("background","white");
		$(".a2").css("color","#41b58f");
	});
	$(".lii3").hover(function(){
		$(".imgg3").attr('src','img/DJY/li8.png');
		$(".lii3").css("background","#ff472f");
		$(".a3").css("color","white");
	},function(){
		$(".imgg3").attr('src','img/DJY/li7.jpg');
		$(".lii3").css("background","white");
		$(".a3").css("color","#ff472f");
	});
	$(".lii4").hover(function(){
		$(".imgg4").attr('src','img/DJY/li6.png');
		$(".lii4").css("background","#c86bc9");
		$(".a4").css("color","white");
	},function(){
		$(".imgg4").attr('src','img/DJY/li5.jpg');
		$(".lii4").css("background","white");
		$(".a4").css("color","#c86bc9");
	});
	$(".lii5").hover(function(){
		$(".imgg5").attr('src','img/DJY/li10.png');
		$(".lii5").css("background","#4a92db");
		$(".a5").css("color","white");
	},function(){
		$(".imgg5").attr('src','img/DJY/li9.jpg');
		$(".lii5").css("background","white");
		$(".a5").css("color","#4a92db");
	});
	
	
	//航空公司
	$(".lli1").click(function(){		
		$(".announce1").show();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce4").hide();
		$(".announce5").hide();
		$(".announce6").hide();
		$(".announce7").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli2").click(function(){		
		$(".announce2").show();
		$(".announce1").hide();
		$(".announce3").hide();
		$(".announce4").hide();
		$(".announce5").hide();
		$(".announce6").hide();
		$(".announce7").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli3").click(function(){		
		$(".announce3").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce4").hide();
		$(".announce5").hide();
		$(".announce6").hide();
		$(".announce7").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli4").click(function(){		
		$(".announce4").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce6").hide();
		$(".announce7").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli5").click(function(){		
		$(".announce5").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce7").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli6").click(function(){		
		$(".announce6").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce7").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli7").click(function(){		
		$(".announce7").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli8").click(function(){		
		$(".announce8").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce7").hide();
		$(".announce5").hide();
		$(".announce9").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli9").click(function(){		
		$(".announce9").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce7").hide();
		$(".announce8").hide();
		$(".announce6").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli10").click(function(){		
		$(".announce10").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli11").click(function(){		
		$(".announce11").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli12").click(function(){		
		$(".announce12").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli13").click(function(){		
		$(".announce13").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli14").click(function(){		
		$(".announce14").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli15").click(function(){		
		$(".announce15").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli16").click(function(){		
		$(".announce16").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce17").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli17").click(function(){		
		$(".announce17").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce15").hide();
		$(".announce16").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli18").click(function(){		
		$(".announce18").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce15").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli19").click(function(){		
		$(".announce19").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce15").hide();
		$(".announce18").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli20").click(function(){		
		$(".announce20").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce15").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli21").click(function(){		
		$(".announce21").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce15").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli22").click(function(){		
		$(".announce22").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce15").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli23").click(function(){		
		$(".announce23").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce15").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli24").click(function(){		
		$(".announce24").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce15").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce25").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli25").click(function(){		
		$(".announce25").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce15").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce26").hide();
		$(".announce27").hide();
	});
	$(".lli26").click(function(){		
		$(".announce26").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce15").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce27").hide();
	});
	$(".lli27").click(function(){		
		$(".announce27").show();
		$(".announce1").hide();
		$(".announce2").hide();
		$(".announce3").hide();
		$(".announce5").hide();
		$(".announce4").hide();
		$(".announce6").hide();
		$(".announce8").hide();
		$(".announce9").hide();
		$(".announce7").hide();
		$(".announce10").hide();
		$(".announce11").hide();
		$(".announce12").hide();
		$(".announce13").hide();
		$(".announce14").hide();
		$(".announce16").hide();
		$(".announce17").hide();
		$(".announce15").hide();
		$(".announce18").hide();
		$(".announce19").hide();
		$(".announce20").hide();
		$(".announce21").hide();
		$(".announce22").hide();
		$(".announce23").hide();
		$(".announce24").hide();
		$(".announce25").hide();
		$(".announce26").hide();
	});
	$(".changeimg").hover(function(){
		$(".changeimg").attr('src','img/DJY/change1_2.jpg');
	},function(){
		$(".changeimg").attr('src','img/DJY/change1_1.jpg');
	});
	$(".bttn1").click(function(){
		if($(".train").val()==""){
			$(".error").show();
		}else{
			$(".error").hide();
		}
	})
//	提交
	
	$(".select10").click(function(){
		$(".bigg1leftpage1").show();
		$(".bigg1leftpage2").hide();
	})
	$(".select11").click(function(){
		$(".bigg1leftpage2").show();
		$(".bigg1leftpage1").hide();
	})
	
//	头部
//header_search_btn点击搜索框变化
	$(".header_search_btn button").click(function(){
		$(this).addClass("search_switch_selected").siblings().removeClass("search_switch_selected");
	})
	$(".header_search_btn button:nth-of-type(1)").click(function(){
		$(this).parent().next().children().eq(0).attr("placeholder","目的地/酒店/景点/签证等");
	})
	$(".header_search_btn button:nth-of-type(2)").click(function(){
		$(this).parent().next().children().eq(0).attr("placeholder","");
	})
	$(".header_search_inp input").focus(function(){
		$(this).parent().next().show();
	})
	$(".header_search_inp input").blur(function(){
		$(this).parent().next().hide();
	})
	$(".oo").click(function(){
		$(this).css({"background":"goldenrod","color":"white","border":"none"});
		$(".pp").css({"background":"rgb(229,213,63)","color":"white","border":"none"});
	})
	$(".pp").click(function(){
		$(this).css({"background":"goldenrod","color":"white","border":"none"});
		$(".oo").css({"background":"rgb(229,213,63)","color":"white","border":"none"});
	})
	
	
	
})
