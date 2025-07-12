export default function Slot({ val1, val2, val3 }) {
  const isWinner = val1 === val2 && val2 == val3;
  return (
    <div>
      <h1>
        {val1} {val2} {val3}
      </h1>
      {isWinner ? (
        <h3 style={{ color: "green" }}>you win!!</h3>
      ) : (
        <h3 style={{ color: "green" }}>you lose :(</h3>
      )}
      {isWinner ? <h4>congratulation</h4> : null}
    </div>
  );
}
