export default function ShoppingListItem({ item, quantity, isCompleted }) {
  const styles = {
    color: isCompleted ? "green" : "white",
    textDecoration: isCompleted ? "line-through" : "none",
  };
  return (
    <li style={styles}>
      {item} -{quantity}{" "}
    </li>
  );
}
