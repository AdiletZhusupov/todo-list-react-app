import React from "react";
class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      enteredText: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { value } = e.target;
    this.setState({
      enteredText: value.slice(0, 20)
    });
  }
  render() {
    // console.log(this.state.enteredText)
    return (
      <div className="input-wrapper">
        <input
          onChange={this.handleChange}
          value={this.state.enteredText}
          className="input"
          placeholder="e.g. learn react"
        />
        <button
          onClick={() => {
            this.state.enteredText &&
              this.props.funcButtonClick(this.state.enteredText, false);
            this.setState({
              enteredText: ""
            });
          }}
          type="button"
          className="btn"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Input;
