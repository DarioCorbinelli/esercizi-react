import React from "react";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";

function DisplayLanguage() {
  const lang = useContext(LanguageContext)
  return ( <h1>Current language is {lang}</h1> );
}

export default DisplayLanguage;