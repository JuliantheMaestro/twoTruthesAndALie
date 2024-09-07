let sumEl = document.getElementById("sum-el")


const correctAnswers = {
    "question-1": "a",  
    "question-2": "a",
    "question-3": "c",
    "question-4": "a",
    "question-5": "b",
    "question-6": "c",
    "question-7": "a",
    "question-8": "b",
    "question-9": "c",
    "question-10": "a"
};

function getValue() {
    let score = 0;
    
    // Loop through each question
    for (let question in correctAnswers) {
        // Get the selected radio button for the question
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        
        // Check if the selected option's value matches the correct answer
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    }

    // Update the score display
    document.getElementById('sum-el').innerText = "Your score is: " + score;
}

