import React from 'react';
import { useMemo } from 'react';

function FilteredList({persons}) {
  const rightPersons = useMemo(() => persons.filter(person => person.age > 18), [persons])

  return ( <>
    {rightPersons.map(person => <p key={person.id}>{person.name} ha {person.age} anni</p> )}
  </> );
}

export default FilteredList;