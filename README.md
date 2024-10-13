# Quiz App

This is a simple Quiz App built using **React.js**. The app fetches questions from the Open Trivia Database API and allows users to answer a set of multiple-choice questions. The app features a timer, and upon completion, users can see their results.

## Features

- **Login System:** Users can log in before starting the quiz.
- **Multiple-Choice Quiz:** One question is shown per page with multiple choices.
- **Dynamic Question Loading:** Questions are fetched dynamically from [Open Trivia Database API](https://opentdb.com/).
- **Timer:** The quiz has a countdown timer. When the timer runs out, the quiz automatically ends and shows the results.
- **Result Page:** At the end of the quiz, users can see their score, including the total correct and incorrect answers.

## Technologies Used

- **React.js:** Frontend framework for building UI components.
- **Axios:** To fetch questions from the Open Trivia Database API.
- **React Router:** To handle navigation between different pages (e.g., login, quiz, result).
- **HTML5/CSS3:** For structuring and styling the app.

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (v14 or later)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/novelxv/quiz-app.git
   cd quiz-app
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. **Login:** Enter your username to log in.
2. **Start the Quiz:** After logging in, you will be redirected to the quiz page where you can answer a set of multiple-choice questions.
3. **Timer:** You have a limited amount of time to complete the quiz. The time left is shown at the top.
4. **Result:** Once all the questions are answered, or the timer runs out, you will be taken to the result page, where you can see how many answers were correct and incorrect.

## API

This project uses the [Open Trivia Database API](https://opentdb.com/) to fetch quiz questions. The API returns random multiple-choice questions with varying levels of difficulty.

Example API call:
```bash
https://opentdb.com/api.php?amount=5&type=multiple
```

## Project Structure

The key project structure is as follows:

```
├── src
│   ├── components
│   │   ├── Login.js          # Handles the login form
│   │   ├── Quiz.js           # Handles the quiz logic and rendering
│   │   └── Result.js         # Displays the results at the end of the quiz
│   ├── App.js                # Main application file
│   ├── index.js              # Entry point of the application
│   └── App.css               # Global styles for the app
└── README.md                 # This README file
```

## Author

Novelya Putri Ramadhani (novelxv)