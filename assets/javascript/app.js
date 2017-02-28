// http://www.triviacountry.com/M17-Science-Trivia-Multiple-Choice.htm
var questions = [{
    "Q": "How long ago did dinosaurs become extinct?",
    "A": " 10,000 years",
    "B": " 600,000 years",
    "C": " 6 million years",
    "D": " 60 million years",
    "answer": "D: 60 million years",
    "img": "giphy-1.gif"
}, {
    "Q": "Which of the following food items have the least calories?",
    "A": "  5 ounces of whole milk",
    "B": " 5 ounces of beer",
    "C": " 5 teaspoons of sugar",
    "D": " 5 ounces of vegetable oil",
    "answer": "B: 5 ounces of beer",
    "img": "giphy-2.gif"
}, {
    "Q": "The scapula is more commonly called the what?",
    "A": " shoulder blade",
    "B": " knee cap",
    "C": " femur",
    "D": " lower jaw bone",
    "answer": "A: shoulder blade",
    "img": "giphy-3.gif"
}, {
    "Q": "At the time that the Large Electron-Positron Collider went into operation in 1989 it was the largest scientific instrument ever built with a circumference of over 16 miles. Where is it located?",
    "A": " California and Nevada",
    "B": " France and Switzerland",
    "C": " Austria and Germany",
    "D": " France and Italy",
    "answer": "B: France and Switzerland",
    "img": "giphy-4.gif"
}, {
    "Q": "If a circle and a square have the same area, then which of the following statements must be true?",
    "A": " The circle's circumference is greater than the square's perimeter",
    "B": " the circle's circumference is greater than the square's perimeter",
    "C": " the circle's circumference is less than the square's perimeter",
    "D": " None of the above",
    "answer": "C: the circle's circumference is less than the square's perimeter",
    "img": "giphy-5.gif"
}, {
    "Q": "Which of the following are true during a lunar eclipse?",
    "A": " The sun is between the earth and the moon",
    "B": " the earth is between the sun and the moon",
    "C": " the sun is between the earth and the moon",
    "D": " none of the above",
    "answer": "B: the earth is between the sun and the moon",
    "img": "giphy-6.gif"
}, {
    "Q": "What kinds of quarks form the protons and neutrons in the atoms of matter?",
    "A": "  strange and charmed",
    "B": " top and bottom",
    "C": " up and down",
    "D": " all of the above",
    "answer": "C: up and down",
    "img": "giphy-7.gif"
}, {
    "Q": "What country became the third one to launch a spacecraft to the moon in January 1990?",
    "A": " China",
    "B": " France",
    "C": " Japan",
    "D": " United Kingdom",
    "answer": "C: Japan",
    "img": "giphy-8.gif"
}, {
    "Q": 'Which of the following flowers did not get its name from adding "ia" to the surname of the botanist?',
    "A": " fuchsia",
    "B": " magnolia",
    "C": " zinnia",
    "D": " petunia",
    "answer": "D: petunia",
    "img": "giphy-9.gif"
}, {
    "Q": "What is an imaginary number?",
    "A": " any irrational number",
    "B": " any complex number",
    "C": " the result of dividing any number by zero",
    "D": " the square root of any negative real number",
    "answer": "D: the square root of any negative real number",
    "img": "giphy-10.gif"
}, {
    "Q": "Prior to 1977 rings were only known to exist around Saturn. Since then, at least one ring has been found around which other planet or planets?",
    "A": " Jupiter, Uranus, and Neptune",
    "B": " Uranus and Neptune",
    "C": " Uranus",
    "D": " Mercury and Neptune",
    "answer": "A: Jupiter, Uranus, and Neptune",
    "img": "giphy-11.gif"
}, {
    "Q": "Which of these drugs was discovered first?",
    "A": " aspirin",
    "B": " cocaine",
    "C": " penicillin",
    "D": " morphine",
    "answer": "B: cocaine",
    "img": "giphy-12.gif"
}, {
    "Q": "The Magellan spacecraft launched in 1989, was sent to map the surface of what planet?",
    "A": " Mars",
    "B": " Neptune",
    "C": " Venus",
    "D": " Mercury",
    "answer": "C: Venus",
    "img": "giphy-13.gif"
}, {
    "Q": "In computer software, how many bits are in a kilobyte?",
    "A": " 100",
    "B": " 1,000",
    "C": " 8,000",
    "D": " 8192",
    "answer": "D: 8192",
    "img": "giphy-14.gif"
}, {
    "Q": "In relativity theory, if a spaceship accelerated to near the speed of light, an observer not on the ship might notice all but which of the following?",
    "A": " clocks on the ship would slow down",
    "B": " the ship would get smaller",
    "C": " the ship would lose mass",
    "D": "  the ship would gain mass",
    "answer": "C: the ship would lose mass",
    "img": "giphy-15.gif"
}, {
    "Q": "Which of these animals lays eggs?",
    "A": " Kangaroo",
    "B": " koala",
    "C": " platypus",
    "D": " Tasmanian devil",
    "answer": "C: platypus",
    "img": "giphy-16.gif"
}, {
    "Q": "During which decade was the television invented?",
    "A": " 1920s",
    "B": " 1930s",
    "C": " 1940s",
    "D": " 1950s",
    "answer": "A: 1920s",
    "img": "giphy-17.gif"
}, {
    "Q": "How many of the eight planets other than earth are smaller than Earth?",
    "A": " 0",
    "B": " 2",
    "C": " 4",
    "D": " 6",
    "answer": "C: 4",
    "img": "giphy-18.gif"
}, {
    "Q": "Which of the following animals have, on the average, the shortest lifespan?",
    "A": " gray squirrel",
    "B": " grizzly bear",
    "C": " kangaroo",
    "D": " moose",
    "answer": "C: kangaroo",
    "img": "giphy-19.gif"
}, {
    "Q": "Which of the following gasses account for about 78 percent of the earth's atmosphere?",
    "A": " argon",
    "B": " carbon dioxide",
    "C": " nitrogen",
    "D": " oxygen",
    "answer": "C: nitrogen",
    "img": "giphy-20.gif"
}];


var interval = '';
var timer = countFrom;
var wins = 0;
var loses = 0;
var question = 0;
var count = 0;
var correctAnswer = '';
var countFrom = 12;

$('#text').hide();
$('#timer').hide();
$('#image').hide();

$('#start').on('click', function() {
    $('#begin').hide();
    $('#begin').prop('disabled', true);
    question = 0;
    count = 0;
    wins = 0;
    loses = 0;
    $('#timer').show();
    nextQuestion();
});

$('.btn').on('click', function() {
    clearInterval(interval);
    self = this;
    if ($(self).attr('id') === correctAnswer.charAt(0)) {
        // correct
        $(self).css("border-left-color", "green");
    } else {
        // incorrect
        $(self).css("border-left-color", "red");

    }
    $(".btn").prop('disabled', true);
    setTimeout(function() {
        pick();
    }, 1000);

});


function pick() {
    $(self).css("border-left-color", "");
    clearInterval(interval);
    $('#text').hide();
    $('#image').show();
    $('#timer').css("background-position", "0% 0%");
    if (timer <= 0) {
        // times up
        $('#image h1').text("Times Up");
        $('#image h1').css("color", "red");
        $('#image h2').text("THE CORRECT ANSWER WAS:");
        loses++;

    } else {
        if ($(self).attr('id') === correctAnswer.charAt(0)) {
            // correct
            $('#image h1').text("You are Correct!");
            $('#image h1').css("color", "green");
            $('#image h2').text("");
            wins++;
        } else {
            // incorrect
            $('#image h1').text("You Selected: " + $(self).attr('id'));
            $('#image h1').css("color", "red");
            $('#image h2').text("THE CORRECT ANSWER WAS:");
            loses++;
        }
    }
    // show image and answer
    $('#image h3').text(correctAnswer);
    $("#image-holder").html("<img src=" + "./assets/images/" + questions[question].img + ">");

    question++;
    count = 0;
    setTimeout(function() {
        nextQuestion();
    }, 5000);
}

function nextQuestion() {
    clearInterval(interval);
    if (question >= 20) {
        endGame()
    } else {

        $('#timer h1').text(countFrom);
        $('#timer').css("background-position", "50% 50%");
        $('#image').hide();
        $('#text').show();
        $(".btn").prop('disabled', false);
        correctAnswer = questions[question].answer;
        $('#question').text(questions[question].Q);
        $('#A').text(questions[question].A);
        $('#B').text(questions[question].B);
        $('#C').text(questions[question].C);
        $('#D').text(questions[question].D);
        count = 0;
        clock()
    }
}

function clock() {
    interval = setInterval(function() {
        counter();
    }, 1000);
}

function counter() {
    count++;
    timer = (countFrom - count);
    $('#timer h1').text(timer);
    if (timer <= 0) {
        pick();
    }
}

function endGame() {
    clearInterval(interval);

    $('#start').text("RESET");
    $('#wins').text("Wrong Answers: " + loses);
    $('#loses').text("Correct Answers: " + wins);
    $('#image').hide();
    $('#text').hide();
    $('#timer').hide();
    $('#begin').show();
    $('#start').prop('disabled', false);
}
