import { useState, useEffect } from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'

import './App.css'

function App() {
  let [allData, setAllData] = useState(null)
  let [questions, setQuestions] = useState(null)
  let [wrongAnswers, setWrongAnswers] = useState(null)

  function getQuestions(data){
    return data.map((item) => item.question
    )
  
  }


  

  useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
      .then(res => res.json())
      .then((data) => {
          setAllData(data.results)
          console.log(allData)
     })
  }, [])

  useEffect(() => {
    if(allData === null){
      console.log("loading")
    } else {
      const extractedQuestionData = getQuestions(allData);
      setQuestions(extractedQuestionData);
      console.log(questions)
    }
      
  },[allData])

 
  

  return (
    <>
      <Start />
      <Quiz 
      
      questions={questions}/> 
    </>
  )
}

export default App
