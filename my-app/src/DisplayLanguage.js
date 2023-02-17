import React from "react";
import { LanguageContext } from "./LanguageContext";

const SetLanguage = {
  en: { CURRENT_LANGUAGE: "The language is English" },
  it: { CURRENT_LANGUAGE: "La lingua è Italiano" },
};
export class DisplayLanguage extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          return <h1>{SetLanguage[language].CURRENT_LANGUAGE}</h1>;
        }}
      </LanguageContext.Consumer>
    );
  }
}
