import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const SetLanguage = {
  en: { CURRENT_LANGUAGE: "The language is English" },
  it: { CURRENT_LANGUAGE: "La lingua è Italiano" },
};
export function DisplayLanguage() {
  const language = useContext(LanguageContext);
  return <h1>{SetLanguage[language].CURRENT_LANGUAGE}</h1>;
}
