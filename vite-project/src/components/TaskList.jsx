import React from "react";
import classnames from 'classnames';

class TaskList extends React.Component {

  handleClick = (e) => {
    const data = [...this.props.taskList.tasks];
    const taskValue = e.target.textContent
    console.dir(e.target.textContent);
    console.dir(this.props.taskList.tasks);
    console.dir(data);
    data.forEach((item) => {
      if (item.name === taskValue) {
        item.undo ? item.undo = false : item.undo = true
        item.do ? item.do = false : item.do = true
      }
    })
    console.log(data);
    this.props.onStatus(data)
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
          return <li key={task.id}><button className={btnClasses} onClick={(e) => this.handleClick(e)}>{task.name}</button></li>
        })}
      </ul>
    );
  }
}

export default TaskList