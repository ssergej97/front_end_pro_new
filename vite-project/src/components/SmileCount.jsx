import React, { use, useState } from "react";
import SmileList from "./SmileList.jsx";
import Result from "./Result.jsx";

// function SmileCount() {
//   const [smileScore, addSmileScore] = useState(0);
//
//   function handleClick() {
//     addSmileScore(smileScore + 1);
//   }
//
//     return (
//       <>
//           <SmileList smileScore={smileScore} onSmileScoreChange={handleClick}></SmileList>
//           <Result></Result>
//       </>
//     )
// }

function SmileCount() {

  const [smileScore, addSmileScore] = useState(Array(2).fill(null));

  function handleClick(i) {
    // addSmileScore(smileScore + 1);
    const nextScore = smileScore.slice();
    nextScore[i] += 1;
    addSmileScore(nextScore);
  }

  return (
    <>
      <SmileList smileScore={smileScore} onSmileScoreChange={handleClick}></SmileList>
      <Result smileScore={smileScore}></Result>
    </>
  )
}

export default SmileCount
