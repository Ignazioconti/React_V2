import React from "react";
// import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// import { Container } from "./Container";
// import { Counter } from "./Counter";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { GitHubUser } from "./GitHubUser";
// import { GitHubUserList } from "./GitHubUserList";
// import { HelloWord } from "./HelloWord";
// import { HookForm } from "./HookForm";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { LanguageContext } from "./LanguageContext";
// import { Login } from "./Login";
// import { Sum } from "./Sum";
// import { TodoList } from "./TodoList";
// import { UncontrolledLogin } from "./UncontrolledLogin";
// import { Welcome } from "./Welcome";
// import { HookCounter } from "./HookCounter";
import { FilteredList } from "./FilteredList";
// import { CarDetails } from "./CarDetails";
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
        {/* <LanguageContext.Provider value={this.state.language}>
          <select
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="it">Italian</option>
          </select>
          <DisplayLanguage />
        </LanguageContext.Provider> */}
        {/* <HelloWord />
        <Welcome name="John" renderAge={true} />
        <Counter
          initialValue={2}
          incrementalAmount={2}
          incrementInterval={2000}
        />
        <ClickCounter
          onCounterChange={(counter) => {
            console.log(`the count is ${counter}`);
          }}
        />
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
        <GitHubUser username="Ignazioconti" />
        <GitHubUserList /> */}

        {/* <HookForm /> */}
        {/* <HookCounter /> */}
        {/* <GitHubUser username="Ignazioconti" />
        <GitHubUserList />
        <CarDetails
          initialData={{ model: "Lancia Y", year: 2017, color: "White" }}
        /> */}
        <FilteredList />
      </div>
    );
  }
}
