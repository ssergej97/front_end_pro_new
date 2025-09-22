import React, { useState } from 'react';

function Result ({smileScore}) {
  const [result, setResult] = useState(null);
  const resultFunc = () => {
    let resultScore = 0;
    smileScore.forEach((value) => {
      if (value.score > resultScore) {
        resultScore = value.score;
      }
    })
    let winnerSmile = null;
    smileScore.forEach((value) => {
      if (value.score === resultScore) {
        winnerSmile = value.value;
      }
    })
    return winnerSmile;
  }

  const handleShowResult = () => {
    const finalScore = resultFunc();
    setResult(finalScore);
  };


  return (
    <>
      <button onClick={handleShowResult}
        type="button"
        className="btn btn-success"
      >Show Result</button>
      <span>{result}</span>
    </>
  )
}

export default Result
