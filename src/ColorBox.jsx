import { useState } from "react";

export default function ColorBox({ colors }) {
  const [idx, setIdx] = useState(Math.floor(Math.random() * colors.length));

  function manageClick() {
    const newIdx = Math.floor(Math.random() * colors.length);
    setIdx(newIdx);
  }

  return (
    <div
      style={{ height: "200px", width: "200px", backgroundColor: colors[idx] }}
      onClick={manageClick}
    >
      Click me
    </div>
  );
}
