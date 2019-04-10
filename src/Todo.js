import React, { Component } from 'react';
import './css/App.css';

class Todo extends Component {
  //constructorとsuperはAppの親でやってるから子にはいらない
  render() {
    const className = 'active';
    const link = this.props.done ? '元に戻す' : '完了！';//三項演算子 は 悪なのか？
    //this.props.done が trueの時は「元に戻す」、falseの時は「完了」ボタン
    return (//todosの中身が入る
      <li className={className}>
        <span>{this.props.id}.</span>
        <span className="ttl">{this.props.title}</span>
        <a href="" className="btn" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props); }}>{link}</a>
        <p>{this.props.disc}</p>
      </li>
    );
  }
}

export default Todo;
