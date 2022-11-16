import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Question } from "../Helpers/QuestionBank";


function EndScreen() {
    const { setGameState} = useContext(QuizContext);
    const {score , setscore} = useContext(QuizContext)
    const Restart = ()=>{
        setscore(0)
        setGameState("menu")
    }
    return ( 
        <div className="Menu">
        <h2>Result</h2>
        <h3 className="option">{score}/{Question.length}</h3>
        <button className="Next-Finish-btn" onClick= {Restart}>Go To Menu</button>
        </div>
     );
}

export default EndScreen;