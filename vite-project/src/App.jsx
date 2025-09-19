import React from 'react'
import Header from "./components/Header.jsx";
import Aside from "./components/Aside.jsx";
import Container from "./components/Container.jsx";

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <main>
          <Container>
            <Aside></Aside>
          </Container>
        </main>
      </>
    )
  }
}

export default App
