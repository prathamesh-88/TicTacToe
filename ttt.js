// 0 for x
// 1 for O
var turn = 0;
var gameOver = false;
function reset(){
	$("#main").slideUp(500, function(){
		gameOver = false;
		$("span").removeClass("active");
		$(".box").removeClass("x");
		$(".box").removeClass("o");
		$("#p1Indicator").addClass("active");
		$("#main").slideDown(500);
		$("#winDisplay").fadeOut(400);
	});
	turn=0;
}

function gameWin(query) {
	var win = "";
	(query == "box x")? win="1" : win ="2";
	$("#winDisplay span").text(win);
	$("#winDisplay").fadeIn(400);
}
function isGameOver(){
	if ($("#0").attr("class") == $("#1").attr("class") && 
		$("#1").attr("class") == $("#2").attr("class") && $("#2").attr("class")!= "box" )
					gameWin($("#2").attr("class"));
		
	else if ($("#3").attr("class") == $("#4").attr("class") &&
		$("#4").attr("class") == $("#5").attr("class") && $("#5").attr("class") != "box")
				gameWin($("#5").attr("class"));

	else if ($("#6").attr("class") == $("#7").attr("class") &&
		$("#7").attr("class") == $("#8").attr("class") && $("#8").attr("class") != "box")
			gameWin($("#8").attr("class"));

	else if ($("#0").attr("class") == $("#3").attr("class") &&
		$("#3").attr("class") == $("#6").attr("class") && $("#6").attr("class") != "box")
			gameWin($("#6").attr("class"));
	
	else if ($("#1").attr("class") == $("#4").attr("class") &&
		$("#4").attr("class") == $("#7").attr("class") && $("#7").attr("class") != "box")
			gameWin($("#7").attr("class"));

	else if ($("#2").attr("class") == $("#5").attr("class") &&
		$("#5").attr("class") == $("#8").attr("class") && $("#8").attr("class") != "box")
			gameWin($("#8").attr("class"));

	else if ($("#0").attr("class") == $("#4").attr("class") &&
		$("#4").attr("class") == $("#8").attr("class") && $("#8").attr("class") != "box")
			gameWin($("#8").attr("class"));

	else if ($("#2").attr("class") == $("#4").attr("class") &&
		$("#4").attr("class") == $("#6").attr("class") && $("#6").attr("class") != "box")
			gameWin($("#6").attr("class"));

	else 
		return false;

}



$(".box").on("click",function(){
	console.log($(this).attr("class"));
	if (!($(this).hasClass("box x")  || $(this).hasClass("box o")) && !gameOver) {
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
	}	
	gameOver = isGameOver();
});




$("#reset").on("click",reset);

$(".box").data({
		"occupied" : false,
		"occupiedBy":null
	});
