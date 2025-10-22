const QUESTION_BANK = [
  {
    id: 1,
    difficulty: "easy",
    prompt: "True or False: If a runner doesn’t slide on a force play, they are automatically out.",
    options: ["True", "False"],
    correctIndex: 1,
  },
  {
    id: 2,
    difficulty: "easy",
    prompt: "Prior to the pitch, a balk is called by the umpire, but the pitcher still delivers the pitch. What should the batter do?",
    options: [
      "Swing if it’s a good pitch",
      "Swing no matter what",
      "Take the pitch",
      "Step out of the box",
    ],
    correctIndex: 1,
  },
  {
    id: 3,
    difficulty: "easy",
    prompt: "A bunt comes to rest on top of home plate. Is it fair or foul?",
    options: ["Fair", "Foul", "Dead ball", "Umpire discretion"],
    correctIndex: 0,
  },
  {
    id: 4,
    difficulty: "easy",
    prompt: "If a fly ball hits a runner standing on a base before a fielder catches it, what is the call?",
    options: ["Runner is out", "Batter is out", "Both out", "Play continues"],
    correctIndex: 0,
  },
  {
    id: 5,
    difficulty: "easy",
    prompt: "True or False: The batter’s hands are considered part of the bat.",
    options: ["True", "False"],
    correctIndex: 1,
  },
  {
    id: 6,
    difficulty: "easy",
    prompt: "If a catcher drops strike three with two outs and first base open, can the batter run?",
    options: ["Yes", "No", "Only with two strikes", "Only if catcher appeals"],
    correctIndex: 0,
  },
  {
    id: 7,
    difficulty: "easy",
    prompt: "With a runner on third and one out, what’s the batter’s best goal?",
    options: [
      "Ground ball to right side",
      "Fly ball deep to outfield",
      "Hard line drive to third base",
      "Draw a walk",
    ],
    correctIndex: 1,
  },
  {
    id: 8,
    difficulty: "easy",
    prompt: "You’re tied in the 8th inning with runners on first and second and nobody out. What’s the smart play?",
    options: [
      "Swing away",
      "Bunt to advance runners",
      "Steal both bases",
      "Wait for a walk",
    ],
    correctIndex: 1,
  },
  {
    id: 9,
    difficulty: "easy",
    prompt: "The defense is up by two with a runner on third and one out. Where should the infield play?",
    options: ["Infield in", "Halfway", "Back", "Guard lines"],
    correctIndex: 2,
  },
  {
    id: 10,
    difficulty: "easy",
    prompt: "You’re up by one in the last inning with a slow runner on third — where should the infield play?",
    options: ["In", "Halfway", "Back", "Corners in"],
    correctIndex: 0,
  },
  {
    id: 11,
    difficulty: "easy",
    prompt: "True or False: On a 3–2 count with two outs and a runner on first, the runner should run on the pitch.",
    options: ["True", "False"],
    correctIndex: 0,
  },
  {
    id: 12,
    difficulty: "easy",
    prompt: "When is it okay to intentionally walk a hitter?",
    options: [
      "Always with first base open",
      "To set up a double play",
      "Only if the pitcher is behind in count",
      "To load the bases",
    ],
    correctIndex: 1,
  },
  {
    id: 13,
    difficulty: "medium",
    prompt: "A right-handed pitcher opens his front shoulder too early. What will likely happen?",
    options: [
      "Miss high and arm-side",
      "Miss low and glove-side",
      "Throw more strikes",
      "Increase velocity",
    ],
    correctIndex: 0,
  },
  {
    id: 14,
    difficulty: "medium",
    prompt: "What mechanical cue helps keep a consistent release point?",
    options: ["Stay tall", "Finish out front", "Pull head early", "Shorten stride"],
    correctIndex: 1,
  },
  {
    id: 15,
    difficulty: "medium",
    prompt: "True or False: Using the lower half helps generate velocity and stability.",
    options: ["True", "False"],
    correctIndex: 0,
  },
  {
    id: 16,
    difficulty: "medium",
    prompt: "What’s the main benefit of a long stride?",
    options: [
      "Adds deception and extension",
      "Slows delivery for control",
      "Improves arm path",
      "Reduces fatigue",
    ],
    correctIndex: 0,
  },
  {
    id: 17,
    difficulty: "medium",
    prompt: "What’s the purpose of a pre-pitch routine?",
    options: [
      "Relax muscles",
      "Build consistency and focus",
      "Distract the batter",
      "Speed up tempo",
    ],
    correctIndex: 1,
  },
  {
    id: 18,
    difficulty: "medium",
    prompt: "Which pitch relies most on pronation for spin direction?",
    options: ["Curveball", "Changeup", "Slider", "Cutter"],
    correctIndex: 1,
  },
  {
    id: 19,
    difficulty: "medium",
    prompt: "When should a hitter shorten their stride?",
    options: [
      "With two strikes",
      "With a full count",
      "When facing slow pitcher",
      "Always",
    ],
    correctIndex: 0,
  },
  {
    id: 20,
    difficulty: "medium",
    prompt: "True or False: A hitter should always take the first pitch.",
    options: ["True", "False"],
    correctIndex: 1,
  },
  {
    id: 21,
    difficulty: "medium",
    prompt: "“Staying inside the ball” means:",
    options: [
      "Hands stay close to body through contact",
      "Swinging around the ball",
      "Hitting only to opposite field",
      "Opening hips early",
    ],
    correctIndex: 0,
  },
  {
    id: 22,
    difficulty: "medium",
    prompt: "Runner on first — ball hit sharply to right fielder. What should runner do?",
    options: [
      "Go halfway and read play",
      "Return to base immediately",
      "Tag and advance",
      "Run full speed to second",
    ],
    correctIndex: 0,
  },
  {
    id: 23,
    difficulty: "medium",
    prompt: "What’s the best approach in a 2–0 count?",
    options: [
      "Look fastball and drive it",
      "Take no matter what",
      "Swing for power only",
      "Shorten swing",
    ],
    correctIndex: 0,
  },
  {
    id: 24,
    difficulty: "medium",
    prompt: "What is the goal of a sacrifice bunt?",
    options: [
      "Move runner into scoring position",
      "Get base hit",
      "Force defensive error",
      "Advance batter",
    ],
    correctIndex: 0,
  },
  {
    id: 25,
    difficulty: "hard",
    prompt: "A player’s OPS+ is 130. What does it mean?",
    options: [
      "30% better than league average offensively",
      "30% worse than league average offensively",
      "Slugging percentage of 1.3",
      "On-base average of .130",
    ],
    correctIndex: 0,
  },
  {
    id: 26,
    difficulty: "hard",
    prompt: "What does FIP measure?",
    options: [
      "Pitcher’s performance independent of defense",
      "Batter’s slugging power",
      "Team fielding efficiency",
      "Infield position rating",
    ],
    correctIndex: 0,
  },
  {
    id: 27,
    difficulty: "hard",
    prompt: "True or False: BABIP stands for Batting Average on Balls In Play.",
    options: ["True", "False"],
    correctIndex: 0,
  },
  {
    id: 28,
    difficulty: "hard",
    prompt: "What is a good average MLB OBP?",
    options: [".250", ".320", ".370", ".420"],
    correctIndex: 1,
  },
  {
    id: 29,
    difficulty: "hard",
    prompt: "True or False: WAR measures player value vs. a replacement-level player.",
    options: ["True", "False"],
    correctIndex: 0,
  },
  {
    id: 30,
    difficulty: "hard",
    prompt: "What statistic best predicts future on-base percentage?",
    options: ["Walk rate", "OPS", "BABIP", "Hard-hit rate"],
    correctIndex: 0,
  },
];

const QUESTIONS_PER_ROUND = 10;
const DIFFICULTY_MIX = {
  easy: 4,
  medium: 4,
  hard: 2,
};

const introSection = document.getElementById("intro");
const quizSection = document.getElementById("quiz");
const resultsSection = document.getElementById("results");
const startButton = document.getElementById("start-btn");
const submitButton = document.getElementById("submit-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const questionCounter = document.getElementById("question-counter");
const scoreCounter = document.getElementById("score-counter");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("answer-options");
const feedbackEl = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");
const breakdownEl = document.getElementById("breakdown");

let roundQuestions = [];
let currentIndex = 0;
let currentScore = 0;
let selectedIndex = null;
let locked = false;
let perDifficultyScore = {
  easy: { correct: 0, total: 0 },
  medium: { correct: 0, total: 0 },
  hard: { correct: 0, total: 0 },
};

startButton.addEventListener("click", () => {
  startQuiz();
});

submitButton.addEventListener("click", () => {
  if (selectedIndex === null || locked) return;
  lockQuestion();
});

nextButton.addEventListener("click", () => {
  if (currentIndex + 1 >= roundQuestions.length) {
    showResults();
  } else {
    currentIndex += 1;
    selectedIndex = null;
    locked = false;
    renderQuestion();
  }
});

restartButton.addEventListener("click", () => {
  startQuiz();
});

function startQuiz() {
  roundQuestions = buildRound();
  currentIndex = 0;
  currentScore = 0;
  selectedIndex = null;
  locked = false;
  perDifficultyScore = {
    easy: { correct: 0, total: 0 },
    medium: { correct: 0, total: 0 },
    hard: { correct: 0, total: 0 },
  };

  introSection.classList.add("hidden");
  resultsSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  updateScoreDisplay();
  renderQuestion();
}

function buildRound() {
  const grouped = QUESTION_BANK.reduce((acc, question) => {
    acc[question.difficulty].push(question);
    return acc;
  }, { easy: [], medium: [], hard: [] });

  const selections = [];
  Object.entries(DIFFICULTY_MIX).forEach(([difficulty, count]) => {
    const shuffled = shuffle([...grouped[difficulty]]);
    selections.push(...shuffled.slice(0, count));
  });

  return shuffle(selections);
}

function renderQuestion() {
  const question = roundQuestions[currentIndex];
  const total = roundQuestions.length;

  questionCounter.textContent = `Question ${currentIndex + 1} of ${total}`;
  questionText.textContent = question.prompt;
  feedbackEl.textContent = "";
  feedbackEl.classList.remove("feedback--correct", "feedback--incorrect");

  optionsContainer.innerHTML = "";
  question.options.forEach((choice, index) => {
    const optionId = `option-${currentIndex}-${index}`;
    const optionWrapper = document.createElement("label");
    optionWrapper.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = String(index);
    input.id = optionId;

    const choiceText = document.createElement("span");
    choiceText.textContent = choice;

    input.addEventListener("change", () => {
      selectedIndex = Number(input.value);
      submitButton.disabled = false;
      highlightSelected(index);
    });

    optionWrapper.append(input, choiceText);
    optionsContainer.append(optionWrapper);
  });

  submitButton.disabled = selectedIndex === null;
  submitButton.classList.remove("hidden");
  nextButton.classList.add("hidden");
}

function lockQuestion() {
  const question = roundQuestions[currentIndex];
  locked = true;
  const isCorrect = selectedIndex === question.correctIndex;
  perDifficultyScore[question.difficulty].total += 1;
  if (isCorrect) {
    currentScore += 1;
    perDifficultyScore[question.difficulty].correct += 1;
  }

  updateScoreDisplay();

  const optionElements = [...optionsContainer.querySelectorAll(".option")];
  optionElements.forEach((optionEl, index) => {
    const input = optionEl.querySelector("input");
    input.disabled = true;
    optionEl.classList.remove("option--selected");

    if (index === question.correctIndex) {
      optionEl.classList.add("feedback--correct");
    } else if (index === selectedIndex) {
      optionEl.classList.add("feedback--incorrect");
    }
  });

  feedbackEl.textContent = isCorrect
    ? "Correct! Nice read."
    : `Not quite. Correct answer: ${question.options[question.correctIndex]}.`;
  feedbackEl.classList.toggle("feedback--correct", isCorrect);
  feedbackEl.classList.toggle("feedback--incorrect", !isCorrect);

  submitButton.disabled = true;
  submitButton.classList.add("hidden");
  nextButton.classList.remove("hidden");
}

function highlightSelected(selected) {
  const optionElements = [...optionsContainer.querySelectorAll(".option")];
  optionElements.forEach((optionEl, index) => {
    optionEl.classList.toggle("option--selected", index === selected);
  });
}

function showResults() {
  quizSection.classList.add("hidden");
  resultsSection.classList.remove("hidden");

  finalScore.textContent = `You answered ${currentScore} out of ${roundQuestions.length} questions correctly.`;
  breakdownEl.innerHTML = "";

  Object.entries(DIFFICULTY_MIX).forEach(([difficulty, count]) => {
    const stats = perDifficultyScore[difficulty];
    breakdownEl.append(createStatLine(`${capitalize(difficulty)}: ${stats.correct}/${stats.total || count} correct`));
  });

  introSection.classList.add("hidden");
}

function createStatLine(text) {
  const line = document.createElement("div");
  line.textContent = text;
  return line;
}

function updateScoreDisplay() {
  scoreCounter.textContent = `Score: ${currentScore}`;
}

function shuffle(source) {
  const array = [...source];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

// Keep the intro visible on load.
quizSection.classList.add("hidden");
resultsSection.classList.add("hidden");
