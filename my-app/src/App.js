import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { DisplayLanguage } from "./DisplayLanguage";
import { HelloWord } from "./HelloWord";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { Sum } from "./Sum";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
export class App extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <LanguageContext.Provider value={this.state.language}>
          <select
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="it">Italian</option>
          </select>
          <DisplayLanguage />
        </LanguageContext.Provider>
        <HelloWord />
        <Welcome name="John" renderAge={true} />
        <Counter
          initialValue={2}
          incrementalAmount={2}
          incrementInterval={2000}
        />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login />
        <UncontrolledLogin />
        <TodoList
          render={(items) => {
            const [...item] = items;
            return (
              <ul>
                <li>{item}</li>
              </ul>
            );
          }}
        />
        <Container title="Titolo Props" />
          <Sum />
      </div>
    );
  }
}
