export default function Property({ name, rating, price }) {
  return (
    <div style={{ marginRight: "20px" }}>
      <h2>{name}</h2>
      <h3>{rating} </h3>
      <h4>{price} </h4>
    </div>
  );
}
