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

function SmileList({smileScore, onSmileScoreChange}){
  return (
    <ul>
      <li key={1}><button onClick={() => onSmileScoreChange(0)}>{"\u2764"}< /button>{smileScore[0]}</li>
      <li key={2}><button onClick={() => onSmileScoreChange(1)}>{"\uD83D\uDE00"}< /button>{smileScore[1]}</li>
    </ul>
  )
}

export default SmileList
