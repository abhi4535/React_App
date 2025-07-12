import Property from "./Property";

export default function PropertyCard({ properties }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {properties.map((p) => (
        <Property key={p.id} {...p} />
      ))}
    </div>
  );
}
