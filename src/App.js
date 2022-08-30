import './App.css';
import React from "react";
import Heading from "./components/Heading";
import Input from "./components/Input";
import List from "./components/List";
import Clear from "./components/Clear";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      checked: []
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  handleButtonClick(item, check) {
    const prevList = this.state.list;
    const prevCheck = this.state.checked;
    this.setState({
      list: [...prevList, item],
      checked: [...prevCheck, check]
    });
  }
  handleClearClick() {
    this.setState({
      list: [],
      checked: []
    });
  }
  handleDeleteClick(id) {
    const prevList = this.state.list;
    const newList = prevList.filter((item, index) => {
      return id !== index;
    });
    const prevCheck = this.state.checked;
    const newCheck = prevCheck.filter((item, index) => {
      return id !== index;
    });
    this.setState({
      list: newList,
      checked: newCheck
    });
  }
  handleCheckboxChange(e, id) {
    const value = e.target.checked;
    const newCheck = this.state.checked;
    newCheck.splice(id, 1, value);
    this.setState({
      checked: newCheck
    });
  }
  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <Heading />
        <Input funcButtonClick={this.handleButtonClick} />
        <ul className="list">
          {list.map((listItem, index) => {
            return (
              <List
                check={this.state.checked}
                funcCheckboxChange={this.handleCheckboxChange}
                funcDeleteClick={this.handleDeleteClick}
                key={index}
                id={index}
                text={listItem}
              />
            );
          })}
        </ul>
        <Clear funcClearClick={this.handleClearClick} />
      </div>
    );
  }
}

export default App;


