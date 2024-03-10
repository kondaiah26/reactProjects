import React from 'react'

const Result = ({userAnswers, questions, resetQuiz = ()=>{}}) => {

    const correctAns=userAnswers.filter((ans)=>ans).length
  return (
    <div className='results'>
        <h2>Results</h2>
        <p>you have answered {correctAns}  out of {questions.length} questions</p>
      
    </div>
  )
}

export default Result
