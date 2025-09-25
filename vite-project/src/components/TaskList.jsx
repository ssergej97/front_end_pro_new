import React from "react";
import classnames from 'classnames';

class TaskList extends React.Component {

  handleChangeStatus = (e) => {
    const taskValue = e.target.textContent
    console.dir(e.target.textContent);
    this.props.taskList.tasks.forEach((item) => {
      if (item.name === taskValue) {
        item.undo = false
        item.do = true
      }
    })
  }

  render() {
    return (
      <ul style={{listStyleType: "none"}}>
        {this.props.taskList.tasks.map((task) => {
          const btnClasses = classnames(
            'btn',
            'mb-2',
            {
              'btn-danger': task.undo,
              'btn-success': task.do
            }
          );
          return <li key={task.id}><button className={btnClasses} onClick={(e) => this.handleChangeStatus(e)}>{task.name}</button></li>
        })}
      </ul>
    );
  }
}

export default TaskList