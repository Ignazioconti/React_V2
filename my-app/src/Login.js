import React from "react";

export class Login extends React.Component {
  state = {
    name: "",
    email: "",
    checked: false,
    disabled: true,
  };

  inputHandler = (event) => {
    this.setState(
      {
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      () => {
        this.setState({
          disabled:
            this.state.name && this.state.email && this.state.checked
              ? false
              : true,
        });
      }
    );
  };

  loginHendler = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.inputHandler}
          value={this.state.name}
          name="name"
        />
        <input
          type="text"
          onChange={this.inputHandler}
          value={this.state.email}
          name="email"
        />
        <input
          type="checkbox"
          name="checked"
          id=""
          checked={this.state.checked}
          onChange={this.inputHandler}
        />
        <button disabled={this.state.disabled} onClick={this.loginHendler}>
          SUBMIT
        </button>
      </div>
    );
  }
}
