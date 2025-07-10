export default function Die({ numSides = 6 }) {
  const roll = Math.floor(Math.random() * numSides) + 1;
  return (
    <h1>
      {numSides}- die roll : {roll}
    </h1>
  );
}
