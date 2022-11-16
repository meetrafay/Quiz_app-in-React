import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";


function MainMenu() {
  const {gameState, setGameState} = useContext(QuizContext);
  return (
    <div className="Menu">
      <h2>Menu</h2>
      <button className="btn"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;
