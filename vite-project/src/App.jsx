import React from 'react'
import Header from "./components/Header.jsx";
import Aside from "./components/Aside.jsx";

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <main>
            <div className="container">
              <Aside></Aside>
            </div>
        </main>
      </>
    )
  }
}

export default App
