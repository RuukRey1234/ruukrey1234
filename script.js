let questions = [
        {
          "japanese": "とにかく",
          "english": "anyway",
          "partOfSpeech": "形容詞"
        },    
];

let score = 0;
let lives = 3;
let timeLeft = 25;
let currentQuestionIndex = 0;
let timer;
let gameStarted = false;
let selectedQuestions = [];

// HTML要素
const homeScreen = document.getElementById("home-screen");
const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const gameClearScreen = document.getElementById("game-clear-screen");

const gamePlayButton = document.getElementById("game-play-button");
const startButton = document.getElementById("start-button");
const returnHomeButton = document.getElementById("return-home-button");
const returnHomeButtonClear = document.getElementById("return-home-button-clear");
const inputElement = document.getElementById("input");
const wordElement = document.getElementById("word");
const partOfSpeechElement = document.getElementById("part-of-speech");
const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
const timerElement = document.getElementById("timer");
const questionPlaceholder = document.getElementById("question-placeholder");

// ホーム画面からゲーム画面に遷移
gamePlayButton.addEventListener("click", () => {
    homeScreen.style.display = "none";
    gameScreen.style.display = "block";
});

// ゲームスタート
startButton.addEventListener("click", startGame);

// ホームに戻る
returnHomeButton.addEventListener("click", () => {
    gameOverScreen.style.display = "none";
    homeScreen.style.display = "block";
});

returnHomeButtonClear.addEventListener("click", () => {
    gameClearScreen.style.display = "none";
    homeScreen.style.display = "block";
});

function startGame() {
    score = 0;
    lives = 3;
    currentQuestionIndex = 0;
    selectedQuestions = getRandomQuestions();
    gameStarted = true;
    updateUI();
    showQuestion();
    startTimer();
    inputElement.disabled = false;
    inputElement.focus();
    startButton.style.display = "none"; // ゲームスタートボタンを非表示に
    questionPlaceholder.style.display = "none"; // 「ここに問題が表示されます」を非表示
}

function getRandomQuestions() {
    const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random()); // 質問をシャッフル
    return shuffledQuestions.slice(0, 5); // ランダムに5問選ぶ
}

function showQuestion() {
    if (currentQuestionIndex >= 5) {
        showGameClearScreen();
        return;
    }

    const question = selectedQuestions[currentQuestionIndex];
    wordElement.textContent = question.japanese;
    partOfSpeechElement.textContent = question.partOfSpeech;
    inputElement.value = '';  // 以前の入力をクリア
}

function updateUI() {
    scoreElement.textContent = `スコア: ${score}`;
    livesElement.textContent = `ライフ: ${lives}`;
    timerElement.textContent = `残り時間: ${timeLeft}`;
}

function startTimer() {
    timeLeft = 25;
    timerElement.textContent = `残り時間: ${timeLeft}秒`;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `残り時間: ${timeLeft}秒`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    if (inputElement.value === '') {
        handleIncorrectAnswer();
    }
}

inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && inputElement.value !== '') {
        clearInterval(timer);
        checkAnswer(inputElement.value);
    }
});

function checkAnswer(answer) {
    const question = selectedQuestions[currentQuestionIndex];
    if (answer.toLowerCase() === question.english.toLowerCase()) {
        handleCorrectAnswer();
    } else {
        handleIncorrectAnswer();
    }
}

function handleCorrectAnswer() {
    const timeSpent = 25 - timeLeft;
    if (timeSpent <= 5) {
        score += 20;
    } else if (timeSpent <= 15) {
        score += 15;
    } else {
        score += 10;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
        showQuestion();
        startTimer();
    } else {
        showGameClearScreen();
    }
    updateUI();
}

function handleIncorrectAnswer() {
    lives--;
    if (lives <= 0) {
        showGameOverScreen();
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < 5) {
            showQuestion();
            startTimer();
        }
        updateUI();
    }
}

function showGameOverScreen() {
    gameScreen.style.display = "none";
    gameOverScreen.style.display = "block";
}

function showGameClearScreen() {
    gameScreen.style.display = "none";
    gameClearScreen.style.display = "block";
    document.getElementById("final-score-clear").textContent = `あなたのスコアは ${score} 点です！`;
}
