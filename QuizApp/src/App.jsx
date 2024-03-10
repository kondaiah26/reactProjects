import { useState } from 'react'

import './App.css'

import questions from './constants/questions.json'
import Question from './components/question';
import Result from './components/Result'

function App() {
 
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[userAns,setuserAns]=useState([]);

  const handleNextQuestion = (isCorrect)=>{
    setCurrentQuestion(currentQuestion+1);
    setuserAns([...userAns,isCorrect])

  };
  const resetQuiz=()=>{
    setCurrentQuestion(0)
    setuserAns([])
  }

  return (
  <div className='app'>
    <h1>Take the Quiz</h1>
    {currentQuestion < questions.length &&(
      <Question question={questions[currentQuestion] } onAnswerClick={handleNextQuestion}/>
      )}

     <Result userAnswers={userAns} 
              questions={questions} 
              resetQuiz={resetQuiz}/>
    </div>
  )
}


export default App
