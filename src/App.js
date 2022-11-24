import React from "react";
import LanguageContext from "./LanguageContext"
import DisplayLanguage from "./DisplayLanguage";
export default class App extends React.Component {
  state = {
    language: "it"
  }
  
  handleLangChange = (e) => {
    this.setState({language: e.target.value})
  }

  render() {
    return (
      <>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
        <select name="languages" value={this.state.language} onChange={this.handleLangChange}>
          <option value="it">Italiano</option>
          <option value="en">English</option>
        </select>
      </>
    )
  }
}