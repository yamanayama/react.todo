import React, { Component } from 'react';
import Todo from './Todo';//Todo.jsをimportする
import './css/App.css';

class TodoList extends Component {
  //constructorとsuperはAppの親でやってるから子にはいらない
  render() {
    const todos = this.props.todos.map(todo =>
      //親コンポーネントはthis.propsで受け取れる
      //App.jsで設定したtodosを引き継いで、配列の分だけ.mapsで繰り返す
      <Todo
        key={todo.id}//子コンポーネントに同じ形式の配列を渡す時ので、重複しないkeyを設定して区別する
        {...todo}//todoに入っている要素を全て引き継ぐ
        setTodoStatus={this.props.setTodoStatus}
      />
    );
    return (//ulに配列の入った↑で定義したtodosを渡す、liの中身はTodo.jsで定義
      <ul className="list">
        {todos}
      </ul>
    );
  }
}

export default TodoList;
