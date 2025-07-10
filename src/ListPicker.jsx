export default function ListPicker({ values }) {
  const randIdx = Math.floor(Math.random() * values.length);
  const randEle = values[randIdx];
  return (
    <div>
      <h1>The List of Values are: {values} </h1>
      <h2>Randomly picked element is : {randEle} </h2>
    </div>
  );
}
