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
		var dataName = $(this).attr("data-name");
		if(dataName) {
			$(".foodList").load("common/" + dataName + ".html");
		} else {
			$(".foodList").load("common/default.html");
		}
	})
	$(".foodList").on('click', 'li', function(ev) {

		var digit = $(".selectedFoodItem:last-child .digit").text();
		if(digit) {
			var curDigit = parseInt(digit) + 1;
		} else {
			var curDigit = 1;
		}

		var foodName = $(this).children(".name").text();
		var foodNumber = $(this).children(".dot").text();
		//		if(foodNumber){
		//			var curFoodNumber=parseInt(foodNumber)+1;
		//		}else{
		//			var curFoodNumber=1;
		//		}
		var dataId = $(this).attr("data-id");
		var html = "";
		html += '<li class="selectedFoodItem table-tr" data-id=' + dataId + '>';
		html += '<span class="digit">' + curDigit + '</span>';
		html += '<span class="foodName">' + foodName + '</span>';
		html += '<span class="foodNumber">' + 1 + '份</span>'
		html += '<div class="set">'
		html += '<a href="javascripr:void(0);" class="updateCount">修改</a>'
		html += '<a href="javascripr:void(0);" class="deleteCount">删除</a>'
		html += '</div>'
		html += '</li>';
		if(!$(this).hasClass("selectedFood")) {
			$(this).addClass("selectedFood");
			$(this).append('<div class="dot">' + 1 + '</div>');
			$(".selectedFoodList").append(html);
		} else {
			$(this).children(".dot").text(parseInt(foodNumber) + 1);
			$(".selectedFoodItem").each(function() {
				if(dataId == $(this).attr("data-id") && dataId != null) {
					$(this).children(".foodNumber").text(parseInt(foodNumber) + 1 + "份");
				} else {

				}
			});
		}

	})

	$(".selectedFoodList").on('click', '.deleteCount', function() {
		var dataId2=$(this).parents(".selectedFoodItem").attr("data-id");
		$(".foodList li").each(function() {
		if(dataId2 == $(this).attr("data-id") && dataId2!= null) {
			$(this).children(".dot").remove();
			$(this).removeClass("selectedFood");
		} else {

		}
			});
		$(this).parents(".selectedFoodItem").remove();
	})
	
	$(".left-next").on('click',function(){
		$(this).parents(".content-left").find(".selectedFoodItem").css("transform","translateY(-500px)");
	})
	$(".left-prev").on('click',function(){
		$(this).parents(".content-left").find(".selectedFoodItem").css("transform","");
	})
})