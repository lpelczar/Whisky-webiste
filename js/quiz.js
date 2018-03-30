function submitQuiz() {

    document.getElementById('submitButton').style.display = 'none';

    function getQuestionScore (questionName) {
        let questionScore;
        const answers = document.getElementsByName(questionName);

        for (let i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                questionScore = Number(answers[i].value);
            }
        }
        if (isNaN(questionScore)) {
            questionScore = 0;
        }
        return questionScore;
    }

    let totalScore = (getQuestionScore('q1') + getQuestionScore('q2') +
                      getQuestionScore('q3') + getQuestionScore('q4'));


    function getCorrectAnswer (correctAnswerId, questionNumber) {
        return ("The correct answer for question #" + questionNumber + ": <strong>" +
            (document.getElementById(correctAnswerId).innerHTML) + "</strong>");
    }

    if (getQuestionScore('q1') === 0) {
        document.getElementById('correctAnswer1').innerHTML = getCorrectAnswer('correctString1', 1);
    }
    if (getQuestionScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = getCorrectAnswer('correctString2', 2);
    }
    if (getQuestionScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = getCorrectAnswer('correctString3', 3);
    }
    if (getQuestionScore('q4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = getCorrectAnswer('correctString4', 4);
    }

    let maxScore = document.getElementsByClassName('question').length;
    let showScore = "Your Score: " + totalScore + "/" + maxScore;

    if (totalScore === maxScore) {
        showScore = showScore + " <strong>Perfect Score, Congratulations!</strong>"
    }
    document.getElementById('userScore').innerHTML = showScore;
}