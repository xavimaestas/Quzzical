import { useEffect, useState } from "react"



export default function Quiz(props){

    return (
        <div className="main_quiz_container">
              {props.questions && props.questions.map((question, index) => (
                <h3 key={index}>{question}</h3>
            ))}

            
          
            <div className="answers_container">
                <p className="answer_bubble"></p>
            </div>
        </div>
        
    )
}

