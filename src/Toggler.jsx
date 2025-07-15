import { useState } from "react";
export default function Toggler() {
  const [msg, setMsg] = useState("I am happy😁😁");
  function newMsg() {
    setMsg("Now i am more happy😂");
  }
  return (
    <div>
      <h2>{msg}</h2>
      <button onClick={newMsg}>Dont click</button>
    </div>
  );
}
