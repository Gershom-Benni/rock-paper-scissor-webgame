// import confetti from 'https://cdn.skypack.dev/canvas-confetti';

let score = parseInt(document.getElementById("score").innerHTML);
let computer_score = parseInt(
    document.getElementById("computer_score").innerHTML
);

function play(user) {
    let computer_choice = document.getElementById("computer_choice");
    let resultDisplay = document.getElementById("result");
    let computer, random_number;

    random_number = random_num_generator();
    if (random_number == 1) {
        computer = "rock";
    } else if (random_number == 2) {
        computer = "paper";
    } else if (random_number == 3) {
        computer = "scissors";
    }

    let result;
    if (user == computer) {
        result = "Game Tied";
    } else if (
        (computer == "paper" && user == "scissors") ||
        (computer == "scissors" && user == "rock") ||
        (computer == "rock" && user == "paper")
    ) {
        result = "You Won!";
        score += 1;
    } else {
        result = "Computer Won!";
        computer_score += 1;
        document.getElementById("computer_score").innerHTML = computer_score;
    }

    computer_choice.innerHTML = `<div class="circle ${computer}"><img id="rock" src="/images/icon-${computer}.svg" /></div>`;
    resultDisplay.innerHTML = `<h1 class="result_text">${result}</h1>`;
    document.getElementById("score").innerHTML = score;

    if (score == 10) {
        user_win();
    }
    else if (computer_score == 10) {
        computer_win();
    }
}

function user_win() {
    let mainElement = document.getElementsByClassName('main')[0];
    mainElement.innerHTML = '';
    mainElement.innerHTML += '<h1 class="congrats">Congratulations</h1>';
    mainElement.innerHTML += '<h1 class="user_won_heading">You Won The Match</h1>';
    // confetti();
    mainElement.innerHTML += '<button id="retry-btn">Play Again</button>';
    document.getElementById('retry-btn').addEventListener('click', function retry() {
        location.href = location.href;
    });
}
function computer_win() {
    let mainElement = document.getElementsByClassName('main')[0];
    mainElement.innerHTML = '';
    mainElement.innerHTML += '<h1 class="congrats">Sorry...</h1>';
    mainElement.innerHTML += '<h1 class="user_won_heading">Better Luck Next Time</h1>';
    // confetti();
    mainElement.innerHTML += '<button id="retry-btn">Play Again</button>';
    document.getElementById('retry-btn').addEventListener('click', function retry() {
        location.href = location.href;
    });
}

function random_num_generator() {
    let random_number = Math.floor(Math.random() * 3) + 1;
    return random_number;
}
