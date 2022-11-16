import { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Question } from "../Helpers/QuestionBank";

function Quiz() {
  const { score, setscore } = useContext(QuizContext);
  const { setGameState } = useContext(QuizContext);
  const [question, setquestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const calculateScore = () => {
    if (Question[question].answer === optionChosen) {
      setscore(score + 1);
    }
    setquestion(question + 1);
  };
  const CheckResult = () => {
    if (Question[question].answer === optionChosen) {
      setscore(score + 1);
    }
    setGameState("endscreen");
  };

  let btns = document.getElementsByClassName('btn') 
  for (let i=0;i<btns.length; i ++){
    btns[i].addEventListener("click",function(){
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    
  }

  return (
    <div className="Menu">
      <h2>Quiz</h2>
      <div>
        <h3>{Question[question].prompt}</h3>
      </div>
      <div className="option">
        <button
          className="btn active"
          onClick={() => {
            setOptionChosen("A");
          }}
        >
          {Question[question].A}
        </button>
      </div>
      <div className="option">
        <button
          className="btn"
          onClick={() => {
            setOptionChosen("B");
          }}
        >
          {Question[question].B}
        </button>
      </div>
      <div className="option">
        <button
          className="btn"
          onClick={() => {
            setOptionChosen("C");
          }}
        >
          {Question[question].C}
        </button>
      </div>
      <div className="option">
        <button
          className="btn"
          onClick={() => {
            setOptionChosen("D");
          }}
        >
          {Question[question].D}
        </button>
      </div>
      <div className="option">
        {question === Question.length - 1 ? (
          <button className="Next-Finish-btn" onClick={CheckResult}>
            Finish Quiz
          </button>
        ) : (
          <button className="Next-Finish-btn" onClick={calculateScore}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
