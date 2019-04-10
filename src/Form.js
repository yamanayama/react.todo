import React, { Component } from 'react';
import './css/App.css';

class Form extends Component {
  //constructorとsuperはAppの親でやってるから子にはいらない
  render() {//普通のfoam

    return (
      <div className='form'>
        <form onSubmit={this.props.handleSubmit}
        //propsとして受け取ったhandleSubmitをonSubmit時に発火
        //App.jsで定義したhandleSubmit()の処理が動き、Todoの投稿ができるようになる
        >
          <input name="title" type="text" placeholder="タスク説明を入力してください" defaultValue="title" />
          <textarea name="desc" placeholder="タスク説明を入力してください" defaultValue="desc" width="100%" ></textarea>
          <button type='submit'>todoを作成する</button>
        </form>
      </div>
    );
  }
}

export default Form;
