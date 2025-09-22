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
  const smiles = [{id: 1, value: "\u2764", score: 0}, {id: 2, value: "\uD83D\uDE00", score: 0}]

  const [smileScore, addSmileScore] = useState(smiles);
  // const [smileScore, addSmileScore] = useState(smiles);

  function handleClick(i) {
    // addSmileScore(smileScore + 1);
    const nextScore = smileScore.slice();
    nextScore[i].score += 1;
    addSmileScore(nextScore);
  }

  return (
    <>
      <SmileList smiles={smiles} smileScore={smileScore} onSmileScoreChange={handleClick}></SmileList>
      <Result smileScore={smileScore}></Result>
    </>
  )
}

export default SmileCount
