$(document).ready(function() {
	$(".main-wrapper").height($(window).height());
	var contentWrapperHeight = $(window).height() - $(".header").height() - $(".footer").height();
	$(".content-wrapper").height(contentWrapperHeight);

	$(".foodList").load("common/gaijiaofan.html");
	//	$(".foodMenu li:nth-child(2)").click(function(){
	//		$(".foodList").load("common/shaguo.html");
	//	})
	$(".foodMenu").on('click', 'li', function(ev) {
		var ev = ev || window.ev;
		//		 console.log(ev.target.className + " is clicked")
		//		dataName=$(this).data("name");
		$(".foodMenu li").removeClass("foodMenuSelected")
		$(this).addClass("foodMenuSelected");
		dataName = $(this).attr("data-name");
		$(".foodList").load("common/" + dataName + ".html");
	})
})