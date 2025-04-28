document.getElementById("quizForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    let answer = document.getElementById("quizAnswer").value.trim().toLowerCase();
    let feedback = document.getElementById("quizFeedback");

    if (answer === "orange") {
        feedback.textContent = "Correct! Oranges are orange.";
        feedback.className = "correct";
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.className = "incorrect";
    }
};