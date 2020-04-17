// 0 for x
// 1 for O
var turn = 0;
var gameOver = false;
var moves = 9;

function reset(){
	$("#main").slideUp(500, function(){
		gameOver = false;
		moves =9;
		$("span").removeClass("active");
		$(".box").removeClass("x");
		$(".box").removeClass("o");
		$(".box").removeClass("win");
		$("#p1Indicator").addClass("active");
		$("#main").slideDown(500);
		$("#winDisplay").fadeOut(400);
	});
	turn=0;
}

function draw(){
	$("#winDisplay").text("The game is a draw");
	$("#winDisplay").fadeIn(400);
	gameOver = true;	
}

function gameWin(query,winArr) {
	var win = "";
	(query == "box x")? win="1" : win ="2";
	$("#winDisplay").text("Player "+win+" wins the game!!!");
	$("#winDisplay").fadeIn(400);
	winArr.forEach(e => {
		$("#"+e).addClass("win");
	});
	gameOver = true;
}
function isGameOver(){
	if ($("#0").attr("class") == $("#1").attr("class") && 
		$("#1").attr("class") == $("#2").attr("class") && $("#2").attr("class")!= "box" )
					gameWin($("#2").attr("class"),[0,1,2]);
		
	else if ($("#3").attr("class") == $("#4").attr("class") &&
		$("#4").attr("class") == $("#5").attr("class") && $("#5").attr("class") != "box")
					gameWin($("#5").attr("class"), [3, 4, 5]);

	else if ($("#6").attr("class") == $("#7").attr("class") &&
		$("#7").attr("class") == $("#8").attr("class") && $("#8").attr("class") != "box")
					gameWin($("#8").attr("class"), [6, 7, 8]);

	else if ($("#0").attr("class") == $("#3").attr("class") &&
		$("#3").attr("class") == $("#6").attr("class") && $("#6").attr("class") != "box")
					gameWin($("#6").attr("class"), [0, 3, 6]);
	
	else if ($("#1").attr("class") == $("#4").attr("class") &&
		$("#4").attr("class") == $("#7").attr("class") && $("#7").attr("class") != "box")
					gameWin($("#7").attr("class"), [1, 4, 7]);

	else if ($("#2").attr("class") == $("#5").attr("class") &&
		$("#5").attr("class") == $("#8").attr("class") && $("#8").attr("class") != "box")
					gameWin($("#8").attr("class"), [2, 5, 8]);

	else if ($("#0").attr("class") == $("#4").attr("class") &&
		$("#4").attr("class") == $("#8").attr("class") && $("#8").attr("class") != "box")
					gameWin($("#8").attr("class"), [0,4,8]);

	else if ($("#2").attr("class") == $("#4").attr("class") &&
		$("#4").attr("class") == $("#6").attr("class") && $("#6").attr("class") != "box")
					gameWin($("#6").attr("class"), [2, 4, 6]);

	else 
		gameOver= false;

}



$(".box").on("click",function(){
	console.log($(this).attr("class"));
	console.log(gameOver);
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
		moves--;
	}	
	isGameOver();
	if (moves == 0)
		draw();
});


$("#reset").on("click",reset);
