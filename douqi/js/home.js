$(function(){
	var size1=$('.pic>li').length;
	$('.pic>li').eq(0).show();
	$('.lunbo>.nav>li').eq(0).addClass('active');
	$('.lunbo>.nav>li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index=$(this).index();
		var i=index;
		$('.pic>li').eq(index).fadeIn(1000).siblings('.pic>li').fadeOut(1000);
		$('.pic>li').eq(index).css("opacity","0.6").siblings('.pic>li').css("opacity","1");
	})
	
	
	var i=0;
	var t=setInterval(move,1500);
	function moveLeft(){
		i--;
		if (i == -1) {
         i = size1-1;
        }
		$('.lunbo>.nav>li').eq(i).addClass('active').siblings().removeClass('active');
		$('.pic>li').eq(i).fadeIn(1000).siblings('.pic>li').fadeOut(1000);
		$('.pic>li').eq(i).css("opacity","0.6").siblings('.pic>li').css("opacity","1");
	}
	
	function move(){
		i++;
		if (i == size1) {
	     i = 0;
	    }
		$('.lunbo>.nav>li').eq(i).addClass('active').siblings().removeClass('active');
		$('.pic>li').eq(i).fadeIn(1000).siblings('.pic>li').fadeOut(1000);
		$('.pic>li').eq(i).css("opacity","0.6").siblings('.pic>li').css("opacity","1");
	}
	 $(".lunbo").hover(function() {
      clearInterval(t);
    }, function() {
      t = setInterval(move, 1500)
    })
	 
	$(".lunbo>.left").click(function() {
      moveLeft();
    })
    //右边按钮的点击事件
    $(".lunbo>.right").click(function() {
      move();
    })
})


$('.centers1>ul>li').hover(function(){
	$('.products>.centers1>ul>li>.pi1').css("opacity","0");
},function(){
	$('.products>.centers1>ul>li>.pi').css("opacity","1");
})
