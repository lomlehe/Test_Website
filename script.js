alert("Mini Game Pasal Boringgss");

let correctAnswer = "";

// Show Alphabet Game
function alphabetGame() {
    document.getElementById("gameArea").style.display = "block";
    document.querySelector(".games").style.display = "none";

    document.getElementById("question").innerText = "🍎 What comes after A?";
    correctAnswer = "B";
}

// Show Number Game
function numberGame() {
    document.getElementById("gameArea").style.display = "block";
    document.querySelector(".games").style.display = "none";

    document.getElementById("question").innerText = "🔢 What comes after 1?";
    correctAnswer = "2";
}

// Show Color Game
function colorGame() {
    document.getElementById("gameArea").style.display = "block";
    document.querySelector(".games").style.display = "none";

    document.getElementById("question").innerText = "🌈 What color is the sky?";
    correctAnswer = "blue";
}

// Check answer
function checkAnswer(answer) {
    let result = document.getElementById("result");

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        result.innerText = "✅ Correct! 🎉";
    } else {
        result.innerText = "❌ Try again!";
    }
}

// Go back to menu
function goHome() {
    document.getElementById("gameArea").style.display = "none";
    document.querySelector(".games").style.display = "flex";
    document.getElementById("result").innerText = "";
}

