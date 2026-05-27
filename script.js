let correctAnswer = "";

// Alphabet game
function alphabetGame() {
    document.getElementById("gameArea").style.display = "block";
    document.querySelector(".games").style.display = "none";

    document.getElementById("question").innerText = "🍎 What comes after A?";
    correctAnswer = "B";
}

// Number game
function numberGame() {
    document.getElementById("gameArea").style.display = "block";
    document.querySelector(".games").style.display = "none";

    document.getElementById("question").innerText = "🔢 What comes after 1?";
    correctAnswer = "2";
}

// Color game
function colorGame() {
    document.getElementById("gameArea").style.display = "block";
    document.querySelector(".games").style.display = "none";

    document.getElementById("question").innerText = "🌈 What color is the sky?";

    // IMPORTANT: change answer buttons to words
    document.querySelector(".answers").innerHTML = `
        <button onclick="checkAnswer('red')">Red</button>
        <button onclick="checkAnswer('blue')">Blue</button>
        <button onclick="checkAnswer('green')">Green</button>
    `;

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

// Back to menu
function goHome() {
    document.getElementById("gameArea").style.display = "none";
    document.querySelector(".games").style.display = "flex";

    // reset answers back to A B C
    document.querySelector(".answers").innerHTML = `
        <button onclick="checkAnswer('A')">A</button>
        <button onclick="checkAnswer('B')">B</button>
        <button onclick="checkAnswer('C')">C</button>
    `;

    document.getElementById("result").innerText = "";
}
