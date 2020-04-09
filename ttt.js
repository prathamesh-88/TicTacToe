// 0 for x
// 1 for O

var turn = 0;
function reset(){
	$("#main").slideUp(500, function(){
		$("span").removeClass("active");
		$(".box").removeClass("x");
		$(".box").removeClass("o");
		$("#p1Indicator").addClass("active");
		$("#main").slideDown(500);
	});
	turn=0;
}




$(".box").on("click",function(){
$("span").removeClass("active");	
	if (!turn )
	{
		$("#p2Indicator").addClass("active");
		$(this).addClass("x");
	}
	else
	{
		$("#p1Indicator").addClass("active");
		$(this).addClass("o");
	}
	turn = !turn;
	
});




$("#reset").on("click",reset)

