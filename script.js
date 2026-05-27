let correctAnswer = "";

// Alphabet game
function alphabetGame() {
    showGame();
    document.getElementById("question").innerText = "🍎 What comes after A?";

    document.querySelector(".answers").innerHTML = `
        <button onclick="checkAnswer('A')">A</button>
        <button onclick="checkAnswer('B')">B</button>
        <button onclick="checkAnswer('C')">C</button>
    `;

    correctAnswer = "B";
}

// Number game
function numberGame() {
    showGame();
    document.getElementById("question").innerText = "🔢 What comes after 1?";

    document.querySelector(".answers").innerHTML = `
        <button onclick="checkAnswer('1')">1</button>
        <button onclick="checkAnswer('2')">2</button>
        <button onclick="checkAnswer('3')">3</button>
    `;

    correctAnswer = "2";
}

// Color game
function colorGame() {
    showGame();
    document.getElementById("question").innerText = "🌈 What color is the sky?";

    document.querySelector(".answers").innerHTML = `
        <button onclick="checkAnswer('red')">Red</button>
        <button onclick="checkAnswer('blue')">Blue</button>
        <button onclick="checkAnswer('green')">Green</button>
    `;

    correctAnswer = "blue";
}

// Show game
function showGame() {
    document.getElementById("gameArea").style.display = "block";
    document.querySelector(".games").style.display = "none";
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

// Back button
function goHome() {
    document.getElementById("gameArea").style.display = "none";
    document.querySelector(".games").style.display = "flex";
    document.getElementById("result").innerText = "";
}

