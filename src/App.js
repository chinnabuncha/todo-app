import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './counter/Counter';
import './App.css';
import TodoApp from './components/todo/TodoApp';

class App extends Component{
  render(){
  return (
    <div className="App">
  {/*<Counter></Counter>*/}
     <TodoApp></TodoApp>
 
    </div>
  );
}
}
class LearningComponents extends Component{
  render(){
    return (
      <div className="ApLearningComponents">
       My hello chinnabuncha
       <FirstComponent></FirstComponent>
       <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}
export default App;
