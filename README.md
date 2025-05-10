```markdown
# 🎯 Quiz Game

A simple JavaScript-based quiz game that simulates a multiple-choice question round where a computer randomly selects answers and the results are evaluated.

## 🚀 Features

- A collection of trivia questions across multiple categories.
- Random selection of questions and answers.
- Automatic evaluation of computer choices.
- Modular and easy-to-understand code structure.

## 🧠 How It Works

1. A list of questions is stored in the `questions` array.
2. The function `getRandomQuestion()` selects a random question.
3. The function `getRandomComputerChoice()` randomly selects one of the available answers.
4. The function `getResults()` compares the computer's answer with the correct one and returns the result.

## 📂 Project Structure

```

quiz-game/
│
├── script.js            # Main JavaScript file with logic
├── README.md           # Project documentation (you are here)

````

## 🧪 Example Usage

```js
const question = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(question.choices);
const result = getResults(question, computerChoice);
console.log(`Question: ${question.question}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(result);
````

## ✅ Requirements

* A modern web browser or Node.js to run the script.
* Basic knowledge of JavaScript (for customization or extension).

## 💡 Future Improvements

* Add user interaction via the browser (HTML/CSS UI).
* Store scores and show a leaderboard.
* Add more question categories and difficulty levels.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

> Built with ❤️ in JavaScript.

```
