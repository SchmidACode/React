// import logo from '../logo.svg';
import React from 'react';
import Test from '../test/Test'
// import Hello from '../hello/Hello';
// import Length from '../length/Length';
// import Form from '../form/Form'
// import Range from '../range/Range';
// import Posts from '../posts/Posts';

import './App.css';

class App extends React.Component{
  state = {
    post:
    [
      {id: "1", name:"C++ Basics", title:"Процедурное программирование на языке C++"},
      {id: "2", name:"C++ OOP", title:"Объектно-ориентированное программирование на языке C++"},
      {id: "3", name:"Windows via C/C++", title:"Разработка Windows-приложений на языке C++"}
    ]
  }

  //removePost = (id) => this.setState({posts: this.state.posts.filter(post => post.id != id)})
  render() {
      return (
      <div>
        <Test/>
         {/* <Hello name=""/>
         <hr/> <Length/> <hr/>
         <Form />
         <Range /> */}
        {/* <Posts post={this.state.Posts} removePost={this.removePost}/> */}
      </div>
    );
}
}

export default App;
