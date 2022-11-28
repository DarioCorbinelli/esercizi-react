import React from 'react';

function Sum({numbers}) {
  const total = numbers.reduce((t, c) => {
    return t + c
  }, 0)

  return ( <h1>Totale: {total}</h1> );
}

export default Sum;