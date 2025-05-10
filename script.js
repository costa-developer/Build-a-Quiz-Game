// 1. Create an array named questions with at least 5 objects
const questions = [
    {
      category: "Science",
      question: "What planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Venus"],
      answer: "Mars"
    },
    {
      category: "Geography",
      question: "Which continent is the Sahara Desert located on?",
      choices: ["Africa", "Asia", "Australia"],
      answer: "Africa"
    },
    {
      category: "History",
      question: "Who was the first President of the United States?",
      choices: ["Abraham Lincoln", "George Washington", "John Adams"],
      answer: "George Washington"
    },
    {
      category: "Math",
      question: "What is 5 multiplied by 6?",
      choices: ["30", "25", "36"],
      answer: "30"
    },
    {
      category: "Literature",
      question: "Who wrote 'Romeo and Juliet'?",
      choices: ["William Shakespeare", "Mark Twain", "Charles Dickens"],
      answer: "William Shakespeare"
    }
  ];
  
  // 2. Function to get a random question from the questions array
  function getRandomQuestion(questionsArray) {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[randomIndex];
  }
  
  // 3. Function to get a random computer choice from choices array
  function getRandomComputerChoice(choicesArray) {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
  }
  
  // 4. Function to evaluate the result of computer's choice
  function getResults(questionObj, computerChoice) {
    if (computerChoice === questionObj.answer) {
      return "The computer's choice is correct!";
    } else {
      return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
  }
  