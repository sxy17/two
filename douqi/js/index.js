//导航栏
$('.nav_right>ul>.hli').click(function(){
	$(this).css({"borderRadius":" 4px","background":"rgb(29,174,42)"}).siblings('.nav_right>ul>.hli').css({"borderRadius":"0px","background":"white"});
})
$('.nav_right>ul>.hli').hover(function(){
	$(this).css({"borderRadius":" 4px","background":"rgb(29,174,42)"}).siblings('.nav_right>ul>.hli').css({"borderRadius":"0px","background":"white"});
	
},function(){
	$('.nav_right>ul>.hli').css({"border-radius":"0px","background":"white"});
	
})
//侧边栏
$('.onepic').click(function(){
	$('.onepic').hide();
	$('.twopic').show();
	$('.leftdown>ul').slideDown()
})
$('.twopic').click(function(){
	$('.twopic').hide();
	$('.onepic').show();
	$('.leftdown>ul').slideUp()
})
///返回顶部/
$(window).scroll(function(){
	if($(window).scrollTop()>90){
		$(".back").fadeIn(1000);
	}else{
		$(".back").fadeOut();
	}
})
$(".back").click(function(){
	$("html,body").animate({scrollTop:0},500)
})