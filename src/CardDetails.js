// @ts-nocheck
import React from "react";
import { useState } from "react";
import { useRef } from "react";

function CardDetails() {
  const [car, setCar] = useState({})
  const model = useRef();
  const year = useRef();
  const color = useRef();

  function loadDefaults(e) {
    e.preventDefault()
    model.current.value = "mercedes";
    year.current.value = "2021";
    color.current.value = "black";
  }

  function handleSubmit(e) {
    e.preventDefault()
    setCar({
      model: model.current.value,
      year: year.current.value,
      color: color.current.value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={model} type="text" name="model" placeholder="model" />
        <input ref={year} type="text" name="year" placeholder="year" />
        <input ref={color} type="text" name="color" placeholder="color" />
        <button type="reset">reset</button>
        <button type="reset" onClick={loadDefaults}>Load defaults</button>
        <button type="submit">submit</button>
      </form>
      {car.model && car.year && car.color && <h1>La tua macchina è una {car.model} del {car.year} di colore {car.color}</h1>}
    </>
  );
}

export default CardDetails;
