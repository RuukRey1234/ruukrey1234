let questions = [
    { "japanese": "とにかく", "english": "anyway", "partOfSpeech": "副詞" },
    { "japanese": "耳鼻咽喉科(19文字）", "english": "otorhinolaryngology", "partOfSpeech": "副詞" },
    { "japanese": "美しい", "english": "beautiful", "partOfSpeech": "形容詞" },
    { "japanese": "走る", "english": "run", "partOfSpeech": "動詞" },
    { "japanese": "犬", "english": "dog", "partOfSpeech": "名詞" },
    { "japanese": "信頼，信仰(〇〇〇th)", "english": "faith", "partOfSpeech": "名詞" },
    { "japanese": "を貼り付ける，を取り付ける", "english": "attach", "partOfSpeech": "動詞" },
    { "japanese": "子会社", "english": "subsidiary", "partOfSpeech": "名詞" },
    { "japanese": "洞察（力），知覚", "english": "perception", "partOfSpeech": "名詞" }
];

let score = 0;
let lives = 3;
let timeLeft = 90;
let currentQuestionIndex = 0;
let timer;
let selectedQuestions = [];
let wrongAnswers = [];
let correctAnswers = [];

// HTML要素取得
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
const hintButton = document.getElementById("hint-button");
const hintElement = document.getElementById("hint");
const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
const timerElement = document.getElementById("timer");
const questionPlaceholder = document.getElementById("question-placeholder");
const correctAnswerElement = document.getElementById("correct-answer");
const reviewWrongAnswers = document.getElementById("review-wrong-answers");
const reviewCorrectAnswers = document.getElementById("review-correct-answers");
const reviewWrongAnswersClear = document.getElementById("review-wrong-answers-clear");
const reviewCorrectAnswersClear = document.getElementById("review-correct-answers-clear");

// ホーム画面からゲーム画面へ
gamePlayButton.addEventListener("click", () => {
    homeScreen.style.display = "none";
    gameScreen.style.display = "block";
});

startButton.addEventListener("click", startGame);

returnHomeButton.addEventListener("click", () => {
    gameOverScreen.style.display = "none";
    homeScreen.style.display = "block";
    resetGame();
});

returnHomeButtonClear.addEventListener("click", () => {
    gameClearScreen.style.display = "none";
    homeScreen.style.display = "block";
    resetGame();
});

function startGame() {
    score = 0;
    lives = 3;
    timeLeft = 90;
    currentQuestionIndex = 0;
    wrongAnswers = [];
    correctAnswers = [];
    selectedQuestions = getRandomQuestions();
    updateUI();
    showQuestion();
    startTimer();
    inputElement.disabled = false;
    inputElement.focus();
    startButton.style.display = "none";
    questionPlaceholder.style.display = "none";
    hintButton.style.display = "block";
    hintElement.style.display = "none";
    correctAnswerElement.style.display = "none";
    reviewWrongAnswers.innerHTML = "";
    reviewCorrectAnswers.innerHTML = "";
    reviewWrongAnswersClear.innerHTML = "";
    reviewCorrectAnswersClear.innerHTML = "";
    gameScreen.classList.remove("correct", "incorrect"); // 背景色の初期化
}

function resetGame() {
    clearTimer();
    score = 0;
    lives = 3;
    timeLeft = 90;
    currentQuestionIndex = 0;
    inputElement.value = '';
    inputElement.disabled = true;
    startButton.style.display = "block";
    questionPlaceholder.style.display = "block";
    hintButton.style.display = "none";
    hintElement.style.display = "none";
    correctAnswerElement.style.display = "none";
    updateUI();
    gameScreen.classList.remove("correct", "incorrect"); // 背景色の初期化
}

function getRandomQuestions() {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5); // ランダムに5問選ぶ
}

function showQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showGameClearScreen();
        return;
    }

    const question = selectedQuestions[currentQuestionIndex];
    wordElement.textContent = question.japanese;
    partOfSpeechElement.textContent = question.partOfSpeech;
    inputElement.value = '';
    hintElement.style.display = "none";

    // 選択肢要素の初期化
    gameScreen.classList.remove("correct", "incorrect"); // 背景色の初期化
}

function updateUI() {
    scoreElement.textContent = `スコア: ${score}`;
    livesElement.textContent = `ライフ: ${lives}`;
    timerElement.textContent = `残り時間: ${timeLeft}秒`;
}

function startTimer() {
    clearTimer();
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `残り時間: ${timeLeft}秒`;
        if (timeLeft <= 0) {
            clearTimer();
            handleTimeUp();
        }
    }, 1000);
}

function clearTimer() {
    if (timer) clearInterval(timer);
}

function handleTimeUp() {
    lives--;
    if (lives <= 0) {
        showGameOverScreen();
    } else {
        currentQuestionIndex++;
        showQuestion();
        startTimer();
    }
    updateUI();
}

inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && inputElement.value.trim() !== '') {
        clearTimer();
        checkAnswer(inputElement.value.trim());
    }
});

function checkAnswer(answer) {
    const question = selectedQuestions[currentQuestionIndex];
    if (answer.toLowerCase() === question.english.toLowerCase()) {
        score += 10;
        correctAnswers.push(question.english);
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            gameScreen.classList.add("correct"); // 正解時に背景を緑にする
            setTimeout(() => {
                showQuestion();
                startTimer();
            }, 500); // 0.5秒後に次の問題を表示
        } else {
            showGameClearScreen();
        }
    } else {
        lives--;
        wrongAnswers.push(question.english);
        gameScreen.classList.add("incorrect"); // 不正解時に背景を赤にする
        setTimeout(() => {
            if (lives <= 0) {
                showGameOverScreen();
            } else {
                correctAnswerElement.textContent = `正解は: ${question.english}`;
                correctAnswerElement.style.display = "block";
                currentQuestionIndex++;
                showQuestion();
                startTimer();
            }
        }, 500); // 0.5秒後に次の問題を表示またはゲームオーバー画面を表示
    }
    updateUI();
}

hintButton.addEventListener("click", () => {
    const question = selectedQuestions[currentQuestionIndex];
    hintElement.textContent = `ヒント: ${question.english[0].toUpperCase()}`;
    hintElement.style.display = "block";
});

function showGameOverScreen() {
    gameScreen.style.display = "none";
    gameOverScreen.style.display = "block";
    document.getElementById("final-score").textContent = `あなたのスコア: ${score}`;

    // レビュー画面に間違えた単語を表示
    reviewWrongAnswers.innerHTML = `<p>間違えた単語:</p>${wrongAnswers.map(word => `<p>${word}</p>`).join('')}`;
    reviewCorrectAnswers.innerHTML = `<p>正解した単語:</p>${correctAnswers.map(word => `<p>${word}</p>`).join('')}`;
}

function showGameClearScreen() {
    gameScreen.style.display = "none";
    gameClearScreen.style.display = "block";
    document.getElementById("final-score-clear").textContent = `あなたのスコア: ${score}`;

     // レビュー画面に正解した単語を表示
    reviewWrongAnswersClear.innerHTML = `<p>間違えた単語:</p>${wrongAnswers.map(word => `<p>${word}</p>`).join('')}`;
