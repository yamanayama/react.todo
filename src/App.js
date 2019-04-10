import React, { Component } from 'react';
import TodoList from './TodoList'; //TodoList.jsをimportする
import Form from './Form'; //Form.jsをimportする
import './css/App.css';

class App extends Component {
  constructor(props) {//constructorとsuperはビルドでエラーが起きないおまじない
    super(props); //super()はComponentを継承する
    const todos = [ //todoの中身を配列で設定
      {
        id: 1,//あとでこのidを使って、Component内の変数を識別する
        title: 'Hello,JS',
        disc: '1つ目のTODOS',
        done: false
      },
      {
        id: 2,
        title: 'Hello,React',
        disc: '2つ目のTODOS',
        done: false
      },
    ];
    this.state = {
      todos: todos,
      countTodo: todos.length + 1,//idの代わりに使用、Todoの数が1つずつ増える
      //stateの内容は最初の一度しか呼ばれないため、配列todosに新しいTodoの中身をpushし、setState({})でstateを更新する
    };
  }

  handleSubmit(e) {
    e.preventDefault();//preventDefaultとは、子要素から親要素ノバブリングなど、要素のイベントをキャンセルする
    //e.target.(name属性).valueでフォームの中身を取り出す
    //.slice()でコピーされた新しい配列を作り、stateが直接変更されることを防ぐ
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;

    todos.push({
      id: countTodo,
      title: title,
      desc: desc,
      done: false,
    });

    //setState({})でstateを更新
    this.setState({ todos: todos });
    this.setState({ countTodo: countTodo + 1 });

    //e.target.(name属性).valueでフォームの中身を取り出す
    e.target.title.value = '';
    e.target.desc.value = '';
  }
  //Todoの完了/未完了を切り替える
  setTodoStatus(clickTodo) {
    const todos = this.sate.todos.slice();//slice()で新しい配列をコピーして使う
    const todo = todos[clickTodo.id - 1];//配列は0から、idは1からなのでidから1を引いた数字で配列のTodoを取り出す
    todo.done = !todo.done;//true/falseのBoolean型、!マークで真偽を反転
    todos[clickTodo.id - 1] = todo;
    //setState({})でstateを更新
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className='app'>
        <h1>Todos</h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} //
        //handleSubmitでボタンが押されて更新した状態をコンポーネントに渡す
        //this.handleSubmit(this)とすると、このthisは呼び出された先(この場合はFormコンポーネント)になる
        //.bind(this)をつけることで、thisをこのコンポーネントに固定する
        />
        <TodoList //< />でComponentを呼び出す
          todos={this.state.todos}//TodoListComponentに渡したい内容を書く
          //これでTodoList内でtodosという変数が使える
          setTodoStatus={this.setTodoStatus.bind(this)}
        //Todoの完了/未完了の切り替えをTodoListへ渡す、.bindでコンポーントを固定する
        />
      </div>
    );
  }
}

export default App;//importされた時にデフォルトで呼び出す物を定義する　？
