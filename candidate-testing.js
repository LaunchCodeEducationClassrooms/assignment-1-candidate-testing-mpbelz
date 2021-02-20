const input = require('readline-sync');
let name = input.question("Enter your name: ");
console.log("Hello " + name + ", let's get started!\n")
let candidateName = name;
let candidateAnswer = "[]";
let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride"

let questions = ["Who was the first American woman in space? ", "True or false: 5000 meters = 5 kilometers? ", "(5 + 3)/2 * 10 = ? ","Given the array [8, Orbit, Trajectory, 45]what entry is at index 2?", "What is the minimum crew size for the International Space Station(ISS)? "];
let correctAnswers = ["Sally Ride","True","40","Trajectory","3"];
let candidateAnswers = [];
let rightAnswers = 0;
for (let i = 0; i < questions.length; i++) {
     candidateAnswers[i] = input.question (questions[i]
     );
  if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()){
    rightAnswers++; 
  }
   console.log(`your answer : ${candidateAnswers[i]}`);
   console.log(`correct answer : ${correctAnswers[i]}\n`);
}


let score = rightAnswers / questions.length;
console.log("Thank you " + name  + ", here is your score:\n");
console.log("Correct Answers - " + rightAnswers + " out of 5");
console.log(">>> Overall Grade: " + score * 100 + "% <<<");
if ([score * 100] >= 80)
console.log(">>> Status: PASSED!!! <<<");
else
console.log(">>> Status: FAILED <<<");


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName=input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for(i=0;i<questions.length;i++) {
candidateAnswers[i]=input.question(questions[i]);
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let totalCorrectAnswer = 0;
for(let i = 0; i < questions.length; i++){
  if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
     totalCorrectAnswer++;   
}
   console.log(`${questions[i]}`);
   console.log(`your answer : ${candidateAnswers[i]}`);
   console.log(`correct answer : ${correctAnswers[i]}`);
}
let grade=((totalCorrectAnswer/questions.length)*100) ;
  if (grade >= 80) {
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<");
  }
  console.log(`>>> Overall Grade: ${grade} % (${totalCorrectAnswer} of ${questions.length} responses correct) <<<`); 
 return grade;
}

function runProgram() {
 // askForName();
  // TODO 1.1c: Ask for candidate's name //
 //console.log(`Hello: ${candidateName}!`);//
  //askQuestion();//
  //gradeQuiz(this.candidateAnswers);//
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};