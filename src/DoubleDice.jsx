export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 6);
  const num2 = Math.floor(Math.random() * 6);
  const isWinner = num1 === num2;
  const styles = { color: isWinner ? "green" : "red" };

  return (
    <div style={styles}>
      <h1>Dice Roll :-</h1>
      <h2> {isWinner ? "You win !!" : "You lose :("} </h2>
      <h3>num1 : {num1} </h3>
      <h3>num2 : {num2} </h3>
    </div>
  );
}
