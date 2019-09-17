let guessNumber = Math.round(Math.random() * 30);
let tries = 10;

// String const
function restartMessage() {
    return "Загаданное число поменялось";
}

function triesMore() {
    return "Попыток осталось: " + tries;
}

// Boolean funcs
function isLose() {
    return tries === 0;
}

function isWin(number) {
    return guessNumber === number;
}

function isGt(number) {
    return guessNumber > number;
}

function isLt(number) {
    return guessNumber < number;
}

// Action funcs
function makeTriesLess() {
    tries--;
}

function init() {
    guessNumber = Math.round(Math.random() * 30);
    tries = 10;
}

function win() {
    init();
    return `Правильно! ${restartMessage()}`;
}

function lose() {
    init();
    return `Попытки закончились - Вы проиграли. ${restartMessage()}`;
}

function gt() {
    makeTriesLess();
    return `Загаданное число больше. ${triesMore()}`;
}

function lt() {
    makeTriesLess();
    return `Загаданное число меньше. ${triesMore()}`;
}

function guess(number) {
    if (isLose()) {
        return lose();
    }
    if (isWin(number)) {
        return win();
    }
    if (isGt(number)) {
        return gt();
    }
    if (isLt(number)) {
        return lt();
    }
    return "ошибка";
}

const render = data => {
    const card = `
        <div class = "person">
            name: <div class = "person__name"> ${data.name} </div>
            birth year: <div class = "person__birth-year" > ${data.birth_year} </div>
            gender: <div class = "person__gender" > ${data.gender} </div>
            mass: <div class = "person__mass" > ${data.mass} </div> 
        </div>
        `
    const $card = $(card);
    $card.appendTo(document.body);
}


$(document).ready(function () {
    $(".btnF1").click(function () {
        const inputValue = $("input").val();
        const resultValue = guess(+inputValue);
        const $result = $(".result");
        $result.html(resultValue);
    });

    $(".btnF2").click(function () {
        $.getJSON(
            'https:/swapi.co/api/people/1/',
            function (data) {
                render(data)
            }
        );
    });

});