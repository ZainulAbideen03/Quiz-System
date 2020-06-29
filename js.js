function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var correct = 0;


	if (question1 == "Float") {
		correct++;
		document.getElementById("one").style.backgroundColor = "rgba(30, 130, 76, 1)";
}

	if (question1 != "Float") {
	document.getElementById("ones").style.backgroundColor = "rgba(240, 52, 52, 1)";
}

	if (question2 == "Netscape") {
		correct++;
		document.getElementById("two").style.backgroundColor = "rgba(30, 130, 76, 1)";
}
	if (question2 != "Netscape") {
	document.getElementById("twos").style.backgroundColor = "rgba(240, 52, 52, 1)";
}
	if (question3 == "Mocha") {
		correct++;
		document.getElementById("three").style.backgroundColor = "rgba(30, 130, 76, 1)";
	}
	if (question3 != "Mocha") {
		document.getElementById("threes").style.backgroundColor = "rgba(240, 52, 52, 1)";
	}
	if (question4 == "while") {
		correct++;
		document.getElementById("four").style.backgroundColor = "rgba(30, 130, 76, 1)";
	}
	if (question4 != "while") {
		document.getElementById("fours").style.backgroundColor = "rgba(240, 52, 52, 1)";
	}

	var score;

	if (correct == 0) {
		score = 3;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct > 0 && correct < 4) {
		score = 2;
	}

	if (correct == 4) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("number_correct").innerHTML = "Correct: " + correct + " Out of 4";
	}
