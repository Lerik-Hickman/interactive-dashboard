// Array of answers
const answers = ["yes", "no", "maybe",
    "who's to say","of course", "never"];

// Get HTML elemetns
let circle = document.getElementById("circle");
let ball = document.getElementById("ball");
let question = document.getElementById("question");
let reset = document.getElementById("reset")

function displayAnswer()
{
    // Generate random answer
    let index = Math.floor(Math.random() * answers.length);

    // Output random answer
    circle.style.display = "flex";
    circle.innerHTML = answers[index];
}

ball.addEventListener("mousedown", function() {
    // Check if user provided a question
    if (question.value === "")
        alert("Please enter a question before asking for an answer.");
    else
        displayAnswer();},
    false)

// Hide the answer upon reset button being clicked
reset.addEventListener("click", () => circle.style.display = "none", false);
