import React, { Component } from "react";
import "./Counter.css";
import PropsTypes from 'prop-types';



class Counter extends Component{
  constructor() {
    super(); //error 1
    this.state = {
      counter: 0,
      secondCounter:0
     
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  render(){
    return (
      <div className="counter">
       <CounterButton by={1} imcrementMethod={this.increment} decrementMethod={this.decrement} />
       <CounterButton by={200} imcrementMethod={this.increment} decrementMethod={this.decrement}  />
       <CounterButton imcrementMethod={this.increment} decrementMethod={this.decrement} />
       <CounterButton imcrementMethod={this.increment}  decrementMethod={this.decrement} />
       <CounterButton by ={5} imcrementMethod={this.increment} decrementMethod={this.decrement} />
       <CounterButton by ={10} imcrementMethod={this.increment} decrementMethod={this.decrement} />
       <span className="count">{this.state.counter}</span>
       <div><button className ="reset" onClick ={this.reset}>Reset</button></div>
      </div>
    );
  }
  reset(){
    console.log("reset")
    this.setState(
      (prevState)=>{
      
      return {counter:0}
   
    });
  }
  increment =(by) => {
    console.log(`increment  form parent ${by}`)
    //update state-- counter++
    //console.log("increment");
    // this.state.counter++; //bad practice แบบนี้ไม่ดี
    //ไปแสดงตรงปุ่มonClick
    this.setState(
      (prevState)=>{
      //counมีค่า0 ส่วน by จะมีค่าเท่ากับที่เรากำหนดหน้า app
      return {counter: prevState.counter+ by}//+ this.props.by
    //  secondCounter:this.state.secondCounter //+ this.props.by
    });
    //this.increment = this.increment.bind(this);
  }
  decrement =(by) => {
    console.log(`increment  form parent${by}`)
    //update state-- counter++
    //console.log("increment");
    // this.state.counter++; //bad practice แบบนี้ไม่ดี
    //ไปแสดงตรงปุ่มonClick
    this.setState(
      (prevState)=>{
      //counมีค่า0 ส่วน by จะมีค่าเท่ากับที่เรากำหนดหน้า app
      return {counter: prevState.counter-by}//+ this.props.by
    //  secondCounter:this.state.secondCounter //+ this.props.by
    });
    //this.increment = this.increment.bind(this);
  }
}




class CounterButton extends Component {
  //state=>count0
  constructor() {
    super(); //error 1
    this.state = {
      counter: 0,
      secondCounter:0
     
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  render() {
    return (
      <div class="coun
ter">
        {/* เมื่อกดปุ่มจะแสดงincrementที่ console */}
    <button onClick={this.increment}>+{this.props.by}</button>
    <button onClick={this.decrement}>-{this.props.by}</button>
    <span className="count"
        style ={{fontSize: "60px"}}
        >{this.state.counter}</span>

      </div>
    );
  }
  increment =() => {
    //update state-- counter++
    //console.log("increment");
    // this.state.counter++; //bad practice แบบนี้ไม่ดี
    //ไปแสดงตรงปุ่มonClick
    this.setState({
      //counมีค่า0 ส่วน by จะมีค่าเท่ากับที่เรากำหนดหน้า app
      counter: this.state.counter + this.props.by,
      secondCounter:this.state.secondCounter + this.props.by
    });
    this.props.imcrementMethod(this.props.by);
  }
  decrement =() => {
    //ลบ
    //console.log("increment");
    // this.state.counter++; //bad practice แบบนี้ไม่ดี
    //ไปแสดงตรงปุ่มonClick
    this.setState({
      //counมีค่า0 ส่วน by จะมีค่าเท่ากับที่เรากำหนดหน้า app
      counter: this.state.counter-this.props.by,
      secondCounter:this.state.secondCounter - this.props.by
    });
    this.props.decrementMethod(this.props.by);
  }

}

CounterButton.defaultProps={
  by :1
}
CounterButton.propsTypes={
  by:PropsTypes.nunber
}
export default Counter;
