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
    "question-10": "a",
};

function getValue() {
    let score = 0;
    
    
    for (let question in correctAnswers) {
        
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        
        
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    }

    document.getElementById('sum-el').innerText = "Your score is: " + score;

    let correctElements = document.getElementsByClassName("correct-el");
    for (let i = 0; i < correctElements.length; i++) {
        correctElements[i].style.color = "lightgreen";
    }
}

