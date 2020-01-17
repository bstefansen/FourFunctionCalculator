import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      arr: [],
      display: 0,
    };
    this.handleNum = this.handleNum.bind(this);
    this.handleOp = this.handleOp.bind(this);
    this.handleDec = this.handleDec.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleResult = this.handleResult.bind(this);
 };
  
  handleNum(Num) {
    var regexZero = /^0+/g;
    if(regexZero.test(this.state.arr)) {
      this.setState({
        arr: []
      });
    } else {
    this.setState({
      input: Num,
      arr: this.state.arr += Num,
      display: this.state.arr,
    });
   }
  }
  
  handleOp(char) {
    if(
      this.state.input == "+" ||
      this.state.input == "*" ||
      this.state.input == "/" ||
      this.state.input == "-"
      ) {
      if(char == "-" && this.state.input == "*") {
        this.setState({
          input: char,
          arr: this.state.arr += char,
          display: this.state.arr,
        });
      } else if(char == "+" && this.state.input == "-") {
        this.setState({
          input: char,
          arr: this.state.arr.replace(/[*][-]/, char),
          display: this.state.arr
        });
      } else if(char == "-") {
        this.setState({
          input: char,
          arr: this.state.arr.replace(/[*]/, char),
          display: this.state.arr,
        });
      } else {
        this.setState({
          input: char,
          arr: this.state.arr.replace(/[+*/-]/, char),
          display: this.state.arr
        });
      }
    } else {
      this.setState({
        input: char,
        arr: this.state.arr += char,
        display: this.state.arr,
      });
    }
    if (char == "=") {
      this.handleResult();
    }
  }
  
  handleDec(char) {
    if(
      this.state.arr.includes(".") 
       && !this.state.arr.includes("+") 
       && !this.state.arr.includes("-") 
       && !this.state.arr.includes("*") 
       && !this.state.arr.includes("/")
      ) {
      this.setState({
        arr: this.state.arr,
      });
    } else {
      this.setState({
        input: char,
        arr: this.state.arr += char,
        display: this.state.arr,
      });
    }
  }
  
  handleClear() {
    this.setState({
      input: 0,
      arr: [],
      display: 0,
      test: 'false'
    });
  }
  
  handleResult() {
    let answer = eval(this.state.display);
    this.setState({
      display: answer,
      input: 0,
      arr: answer,
    });
  }
  
  render() {
    const bodyStyle = {
      border: "solid 3px silver",
      backgroundColor: "grey",
      width: "20%",
      margin: "auto",
      boxShadow: "3px 3px 20px black",
      border: "solid 5px silver",
      fontSize: "200%"
    }
    const gridStyle = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      padding: ".5em",
      borderTop: "solid 3px silver",
      boxShadow: "0px 0px 10px black",
    }
    const clearStyle = {
      color: "red",
      gridTemplateColumns: "1fr",
      border: "solid 1px black"
    }
    const displayStyle = {
      display: "block",
      color: "white",
      margin: "0",
      padding: ".25em",
      paddingLeft: ".5em",
      fontFamily: "Orbitron, sans-serif"
    }
    const butStyle = {
      border: "solid 1px black",
    }
    const displayBlockStyle = {
      background: "linear-gradient(green 60%, black 250%)"
    }
    
    return (
      <div style={bodyStyle}>
        <div style={displayBlockStyle}>
          <p id="input" style={displayStyle}>{this.state.input}</p>
          <p id="display" style={displayStyle}>{this.state.display}</p>
        </div>
        <div style={gridStyle}>
          <button id="clear" style={clearStyle} onClick={this.handleClear}>C</button>
          <button id="blank" style={butStyle}></button>
          <button id="add" style={butStyle} onClick={() => this.handleOp("+")}>+</button>
          <button id="subtract" style={butStyle} onClick={() => this.handleOp("-")}>-</button>
          <button id="multiply" style={butStyle} onClick={() => this.handleOp("*")}>*</button>
          <button id="divide" style={butStyle} onClick={() => this.handleOp("/")}>/</button>
          <button id="seven" style={butStyle} onClick={() => this.handleNum(7)}>7</button>
          <button id="eight" style={butStyle} onClick={() => this.handleNum(8)}>8</button>
          <button id="nine" style={butStyle} onClick={() => this.handleNum(9)}>9</button>
          <button id="four" style={butStyle} onClick={() => this.handleNum(4)}>4</button>
          <button id="five" style={butStyle} onClick={() => this.handleNum(5)}>5</button>
          <button id="six" style={butStyle} onClick={() => this.handleNum(6)}>6</button>
          <button id="one" style={butStyle} onClick={() => this.handleNum(1)}>1</button>
          <button id="two" style={butStyle} onClick={() => this.handleNum(2)}>2</button>
          <button id="three" style={butStyle} onClick={() => this.handleNum(3)}>3</button>
          <button id="decimal" style={butStyle} onClick={() => this.handleDec(".")}>.</button>
          <button id="zero" style={butStyle} onClick={() => this.handleNum(0)}>0</button>
          <button id="equals" style={butStyle} onClick={() => this.handleOp("=")}>=</button>
        </div>
      </div>
    );
  }
};

export default App;
