import FilteredList from "FilteredList";
import React from "react";
import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({
    name: "",
    age: ""
  })

  function handleInput(e) {
    setNewPerson(newPerson => ({
      ...newPerson,
      [e.target.name]: e.target.value
    }))
  }

  function handleCreateNewPerson() {
    setPersons(persons => [...persons, {name: newPerson.name, id: persons.length + 1, age: newPerson.age}])
    setNewPerson({name: "", age: ""})
  }

  return <>
    <input type="text" name="name" placeholder="name" value={newPerson.name} onChange={handleInput}/>
    <input type="number" name="age" placeholder="age" value={newPerson.age} onChange={handleInput}/>
    <button onClick={handleCreateNewPerson}>Create new adult person</button>
    <FilteredList persons={persons}/>
  </>
}

export default App;
