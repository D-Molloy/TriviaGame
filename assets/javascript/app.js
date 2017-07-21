var timer = 10;
var questCounter = 0;
var answeredCorrect = 0;
var answeredWrong = 0;
var unAnswered = 0;
var currentQuestion;


var allQuestions = [
	{
		questionText: "Who has the most wins as a head coach in the NFL?",
		answer1: "George Halas",
		answer2: "Bill Belichick",
		answer3: "Don Shula",
		answer4: "Curly Lambeau",
		correctAnswer: "Don Shula",
		correctInfo: "Correct! Shula finished his career with 328 wins and 156 losses."
	},
	{
		questionText: "What was the largest crowd for a Super Bowl ever?",
		answer1: "83,518",
		answer2: "100,182",
		answer3: "103,985",
		answer4: "108,258",
		correctAnswer: "103,985",
		correctInfo: "Correct!  In 1979, the Steelers defeated the LA Rams 31-19 in Super Bowl XIV."
	},
	{
		questionText: "Which team has appeared in the most Super Bowls?",
		answer1: "San Francisco",
		answer2: "New England",
		answer3: "Pittsburgh",
		answer4: "Dallas",
		correctAnswer: "New England",
		correctInfo: "Correct! New England has appeared in 9 Super Bowls."
	},
	{
		questionText: "How many Heisman Trophy winners have gone on to be MVP of the Super Bowl?",
		answer1: "4",
		answer2: "5",
		answer3: "6",
		answer4: "7",
		correctAnswer: "4",
		correctInfo: "Correct! Desmond Howard, Jim Plunkett, Marcus Allen, and Roger Staubach have achieved both honors."
	},
	{
		questionText: "Which player was the first to say \"I'm going to Disney World!\" after winning the Super Bowl?",
		answer1: "Phil Simms",
		answer2: "Dan Marino",
		answer3: "Joe Montana",
		answer4: "Boomer Esiason",
		correctAnswer: "Phil Simms",
		correctInfo: "Correct! Simms was the first to say the phrase following the Giants win over the Broncos in SuperBowl XXI in 1987."
	},
	{
		questionText: "Who is the last non-quarterback to win NFL MVP?",
		answer1: "Von Miller",
		answer2: "Adrian Peterson",
		answer3: "Ray Lewis",
		answer4: "LaDainian Tomlinson",
		correctAnswer: "Adrian Peterson",
		correctInfo: "Correct! A QB has been named MVP since Peterson won in 2012."
	},
	{
		questionText: "Which player holds the NFL record for receiving yards in a single game with 336?",
		answer1: "Calvin Johnson",
		answer2: "Stephone Paige",
		answer3: "Jerry Rice",
		answer4: "Flipper Anderson",
		correctAnswer: "Flipper Anderson",
		correctInfo: "Correct! Anderson want on to finish the '89 season with 1184 receiving yards."

	},
	{
		questionText: "Who is the only player enshrined in both the NFL and CFL Hall of Fame?",
		answer1: "Doug Flutie",
		answer2: "Joe Theismann",
		answer3: "Warren Moon",
		answer4: "Fred Biletnikoff",
		correctAnswer: "Warren Moon",
		correctInfo: "Correct! Moon entered the NFL & CFL Halls of Fame in 2006 and 2001, respecitvely. "

	},
	{
		questionText: "Which player holds the NFL record for most converted field goals with 8?",
		answer1: "Rob Bironas",
		answer2: "Adam Vinatieri",
		answer3: "Jason Elam",
		answer4: "Morten Andersen",
		correctAnswer: "Rob Bironas",
		correctInfo: "Correct! The Titans kicker connected on FGs of 52, 25, 21, 30, 28, 43, 29, 29 yards against the Texans in 2007."
	},
	{
		questionText: "The oldest, current NFl franchises are:",
		answer1: "Green Bay Packers and New York Giants",
		answer2: "Washington Redskins and Philadelphia Eagles",
		answer3: "Chicago Bears and Arizona Cardinals",
		answer4: "Pittsburg Steelers and St. Louis Rams",
		correctAnswer: "Chicago Bears and Arizona Cardinals",
		correctInfo: "Correct! Back in 1920 they were known as the Decatur Staleys (Chicago) and the Chicago Cardinals (Arizona)."
	},
];		

// var clock = {

// }


function correctAnswer(){
	$('.button').off("click");
	$('.answer-buttons').hide();
	$('.question').text(allQuestions[questCounter].correctInfo);
	questCounter++;
	answeredCorrect++;
//change back to 9
	if ( questCounter > 2){  
		setTimeout(endScreen, 1000 * 1);
	} else {
		setTimeout(displayQuestion, 1000 * 1);
	}
}

function wrongAnswer(){
	$('.button').off("click");
	$('.answer-buttons').hide();
	$('.question').text("Wrong Answer!");
	questCounter++;
	answeredWrong++
//change back to 9
	if ( questCounter > 2){  
		endScreen();
	} else {
		setTimeout(displayQuestion, 1000 * 1);
	}
	
}

function noTime(){
	$('.button').off("click");
	$('.question').text("Time's Up!");
	$('.answer-1').text("");
	$('.answer-2').text("");
	$('.answer-3').text("");
	$('.answer-4').text("");
	questCounter++;
	unAnswered++
	setTimeout(displayQuestion, 1000 * 1);
}

// var answeredCorrect = 0;
// var answeredWrong = 0;
// var unAnswered = 0;

function endScreen(){
	// $('.button').off("click");
	$('.answer-buttons').show();
	$('.question').text("That's the end of the game!  Here's how you did:");
	$('.answer-1').text("Correct answers: " + answeredCorrect );
	$('.answer-2').text("Wrong answers: " + answeredWrong );
	$('.answer-3').text("Unanswered " + unAnswered );
	$('.answer-4').text(" Click Here To Play Again");
	$('.answer-4').on("click", function(){
		gameReset();
		displayQuestion();
 	});

}

function gameReset() {
	// $('answer-4').off("click");
	 return questCounter = 0;
	 return answeredCorrect = 0;
	 return answeredWrong = 0;
	 return unAnswered = 0;

	 // return questCounter;
	 // return answeredCorrect;
	 // return answeredWrong;
	 // return unAnswered;

	// displayQuestion();
}


function displayQuestion() {
	$('.button').off("click");
	$('.question').text(allQuestions[questCounter].questionText);
	$('.answer-buttons').show();
	$('.answer-1').text(allQuestions[questCounter].answer1);
	$('.answer-2').text(allQuestions[questCounter].answer2);
	$('.answer-3').text(allQuestions[questCounter].answer3);
	$('.answer-4').text(allQuestions[questCounter].answer4);
	$('.button').on("click", function(){
	 	if ($(this).text() == allQuestions[questCounter].correctAnswer){
	 		correctAnswer();
	 	} else {
	 		wrongAnswer();
	 	}
 	});


}



$(document).ready(function() {
	// $('.answer-buttons').hide();
	// $('.question').text("Click Here To Start!");
	// $('.question').on("click", function(){
	// 	displayQuestion();
	// });

	$('.answer-1').text("Click Here To Start!");
	$('.answer-2').hide();
	$('.answer-3').hide();
	$('.answer-4').hide();
	$('.button').on("click", function(){
		$('.answer-2').show();
		$('.answer-3').show();
		$('.answer-4').show();
		displayQuestion();
	});
});
