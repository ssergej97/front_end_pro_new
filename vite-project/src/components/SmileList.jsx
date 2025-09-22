import React from 'react'

// function SmileList({smileScore, onSmileScoreChange}){
//     const smilesArray = [{id: 1, value: "\u2764" }, {id: 2, value: "\uD83D\uDE00" }];
//     const smilesList = smilesArray.map((smile) => <li key={smile.id}><button onClick={onSmileScoreChange}>{smile.value}< /button>{smileScore}</li>)
//       return (
//         <ul>
//           {smilesList}
//         </ul>
//     )
// }

function SmileList({smiles, smileScore, onSmileScoreChange}){
  return (
    <ul>
      <li key={smiles[0].id}><button onClick={() => onSmileScoreChange(0)}>{smiles[0].value}< /button>{smileScore[0].score}</li>
      <li key={smiles[1].id}><button onClick={() => onSmileScoreChange(1)}>{smiles[1].value}< /button>{smileScore[1].score}</li>
    </ul>
  )
}

export default SmileList
