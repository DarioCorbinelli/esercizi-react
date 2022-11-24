import React from "react";
import LanguageContext from "./LanguageContext";

export default class DisplayLanguage extends React.Component {
  render() {
    return <LanguageContext.Consumer>
      {lang => <h1>Current language is {lang}</h1> }
    </LanguageContext.Consumer>
  }
}