import { useState } from "react";

export default function Clicker() {
  const [cnt, setCnt] = useState(0);
  function clickHandle() {
    setCnt(cnt + 1);
  }

  function handleHover() {
    console.log("Hovered!!");
  }
  return (
    <div>
      <h2 onMouseOver={handleHover}>click the button</h2>
      <button onClick={clickHandle}>Count : {cnt}</button>
    </div>
  );
}
