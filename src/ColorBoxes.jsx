import ColorBox from "./ColorBox";
export default function ColorBoxes({ colors }) {
  return (
    <div style={{ display: "flex" }}>
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
    </div>
  );
}
