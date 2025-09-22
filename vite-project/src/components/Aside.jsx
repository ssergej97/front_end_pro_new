import React from 'react'

class Aside extends React.Component {
  render() {
    return (
      <>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#"
            >Active
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              aria-disabled="true"
            >Disabled
            </a>
          </li>
        </ul>
      </>
    )
  }
}

export default Aside
