import React, { useState } from "react";
import "./guess-my-number.css";

var num = Math.trunc(Math.random() * 20) + 1;
const Guessmynumber = () => {
  // const [guess] = useContext(val);
  const [guess, setguess] = useState("");
  const [hidingingNum, sethidingNum] = useState("?");
  const [Score, setScore] = useState(20);
  const [highScore, sethighScore] = useState(0);
  const [Message, setMessage] = useState("Start guessing...");

  const Random = (eve) => {
    setguess(eve.target.value);
  };

  const Func = () => {
    if (Score !== 0) {
      if (guess === num) {
        sethidingNum(num);
        sethighScore(Score);
        setMessage("Your guess is correct");
      } else if (guess > num) {
        setScore(Score - 1);
        setMessage("Your guess is too high");
      } else if (guess < num) {
        setScore(Score - 1);
        setMessage("Your guess is too low");
      }
    } else {
      setMessage("You lost the game");
    }
  };

  const Again = () => {
    setMessage("Start guessing...");
    setScore(20);
    sethidingNum("?");
    num = Math.trunc(Math.random() * 20) + 1;
    setguess("");
  };

  return (
    <div className="Game-Container">
      <div className="game-section">
        <header>
          <h1>Guess My Number!</h1>
          <p className="between">(Between 1 and 20)</p>
          <button onClick={Again} className="btn again">
            Again!
          </button>

          <div className="number">{hidingingNum}</div>
        </header>

        <main>
          <div className="message-container1">
            <p className="message">{Message}</p>
          </div>
          <section className="left">
            <input
              onChange={Random}
              type="number"
              className="guess"
              value={guess}
            />
            <div className="checkbtn">
              <button onClick={Func} className="btn check">
                Check!
              </button>
            </div>
          </section>
          <section className="right">
            <div className="message-container">
              <p className="message">{Message}</p>
            </div>
            <div className="gameScore">
              <p className="label-score">
                💯 Score: <span className="score">{Score}</span>
              </p>
              <p className="label-highscore">
                🥇 Highscore: <span className="highscore">{highScore}</span>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Guessmynumber;
