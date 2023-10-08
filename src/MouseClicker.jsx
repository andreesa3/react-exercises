import { useState, useEffect } from "react";

export default function Counter() {
  const printName = (e) => {
    console.log(e.target.name);
  }

  return (
    <>
      <button name="one" onClick={printName}>Clicca</button>
    </>
  )
}