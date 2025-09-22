import React, { useState } from 'react';

function Result ({smileScore}) {
  const [result, setResult] = useState(0);
  const resultFunc = () => {
    console.log(smileScore);
    let resultScore = 0;
    smileScore.forEach((value) => {
      if (value > resultScore) {
        resultScore = value;
      }
    })
    return resultScore;
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
