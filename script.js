alert("Welcome to my website!");


function startGame() {
    let answer = prompt("What comes after A?");

    if (answer.toLowerCase() === "b") {
        alert("Correct! 🎉");
    } else {
        alert("Oops! Try again 😊");
    }
}

function alphabetGame() {
    let answer = prompt("What comes after A?");
    if (answer.toLowerCase() === "b") {
        alert("Correct! 🎉");
    } else {
        alert("Try again!");
    }
}

function numberGame() {
    let answer = prompt("What comes after 1?");
    if (answer === "2") {
        alert("Correct! 🎉");
    } else {
        alert("Try again!");
    }
}

function colorGame() {
    let answer = prompt("What color is the sky?");
    if (answer.toLowerCase() === "blue") {
        alert("Correct! 🎉");
    } else {
        alert("Try again!");
    }
}
