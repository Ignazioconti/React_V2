import React, { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  console.log(data);
  return (
    <form>
      <input
        onChange={handleInputChange}
        placeholder="Username..."
        name="username"
        type="text"
        value={data.username}
      ></input>
      <input
        onChange={handleInputChange}
        placeholder="Password..."
        name="password"
        type="password"
        value={data.password}
      ></input>
      <input
        onChange={handleInputChange}
        name="remember"
        type="checkbox"
        checked={data.remember}
      ></input>
    </form>
  );
}

// export class Login extends React.Component {
//   state = {
//     name: "",
//     email: "",
//     checked: false,
//     disabled: true,
//   };

//   inputHandler = (event) => {
//     this.setState(
//       {
//         [event.target.name]:
//           event.target.type === "checkbox"
//             ? event.target.checked
//             : event.target.value,
//       },
//       () => {
//         this.setState({
//           disabled:
//             this.state.name && this.state.email && this.state.checked
//               ? false
//               : true,
//         });
//       }
//     );
//   };

//   loginHendler = () => {
//     console.log(this.state);
//   };
//   resetAllInputs = () => {
//     this.setState({
//       username: "",
//       password: "",
//       remember: false,
//     });
//   };

//   render() {
//     const buttonStyle = {
//       backgroundColor: this.state.password.length < 8 ? "red" : "green",
//     };

//     return (
//       <div>
//         <input
//           type="text"
//           onChange={this.inputHandler}
//           value={this.state.name}
//           name="name"
//         />
//         <input
//           type="text"
//           onChange={this.inputHandler}
//           value={this.state.email}
//           name="email"
//         />
//         <input
//           type="checkbox"
//           name="checked"
//           id=""
//           checked={this.state.checked}
//           onChange={this.inputHandler}
//         />
//         <button
//           style={buttonStyle}
//           name="login"
//           disabled={!this.state.username || !this.state.password}
//           onClick={() => this.loginHendler(this.state)}
//         >
//           Login
//         </button>
//         <button name="reset" onClick={this.resetAllInputs}>
//           Reset
//         </button>
//       </div>
//     );
//   }
// }
