// Question object -- 
// text - question to user
// choices - options to select 
// answer - correct answer
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  
  // creating / adding method isCorrectAnswer() to 
  // check user choice
  Question.prototype.isCorrectAnswer = function(choice) { 
    return this.answer === choice;
  }
  
  // create questions array here
  var questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
  ];
  
  // Quiz Object 
  function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  
  // creating / adding method getQuestionByIndex () to get Question by index
  Quiz.prototype.getQuestionByIndex = function() {
    return this.questions[this.questionIndex];
  }
  
  // creating / adding method checkOptionWithAnswer() to 
  // check user answer and change the score
  Quiz.prototype.checkOptionWithAnswer = function(answer) {
    if(this.getQuestionByIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
  }
  
  // creating / adding method isEnded() to know quiz is ended or not
  Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
  }
  
  // displaying the question number (x) out of total questions (y) -- Question x of y
  function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
  };
  
function loadQuestions() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionByIndex().text;
        // show options
        var choices = quiz.getQuestionByIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
        }
        // handleOptionButton();
        showProgress();
    }
  };
  
  // calling on user option 
  function handleOptionButton() {
    let id = document.querySelector('input[name="answer"]:checked').value;
    let choice = "choice"+ id.substring(id.length-1);
    let ans = document.getElementById(choice).innerText;
        quiz.checkOptionWithAnswer(ans);
        loadQuestions();
        // selecting hidden radio button 
        document.getElementById("hid").checked = true;
  };
  
  // showing result at the end of questions 
  function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + ". <br/>And mark percentage is: "+(quiz.score/questions.length*100)+"%"+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  };
  
  // create quiz
  var quiz = new Quiz(questions);
  
  // display quiz
  loadQuestions();