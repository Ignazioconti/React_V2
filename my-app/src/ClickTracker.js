import React from "react";

export class ClickTracker extends React.Component {
  state = {
    buttons: null,
  };
  handlerClickButton = (event) => {
    this.setState({
      buttons: event.target.name,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handlerClickButton} name="btn-01">
          Click-01
        </button>
        <button onClick={this.handlerClickButton} name="btn-02">
          Click-02
        </button>
        <button onClick={this.handlerClickButton} name="btn-03">
          Click-03
        </button>
        <h1>{this.state.buttons}</h1>
      </div>
    );
  }
}
