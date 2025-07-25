import Chicken from "./Chicken";
import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./heading";
import ColorList from "./ColorList";
import Slot from "./Slot";
import ShoppingList from "./ShoppingList";
import ShoppingListItem from "./ShoppingListItem";
import PropertyCard from "./PropertyCard";
import Clicker from "./Clicker";
import Toggler from "./toggler";
import ColorBoxes from "./ColorBoxes";
const data = [
  { id: 1, item: "egg", quantity: "7", isCompleted: true },
  { id: 2, item: "mango", quantity: "17", isCompleted: true },
  { id: 3, item: "banana", quantity: "8", isCompleted: false },
  { id: 4, item: "guava", quantity: "22", isCompleted: true },
];

const properties = [
  { id: 1, name: "bengal", rating: 4.5, price: "$45" },
  { id: 1, name: "bengal", rating: 4.5, price: "$45" },
  { id: 1, name: "bengal", rating: 4.5, price: "$45" },
  { id: 1, name: "bengal", rating: 4.5, price: "$45" },
  { id: 1, name: "bengal", rating: 4.5, price: "$45" },
];
const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {
  return (
    <div>
      <Toggler />
      <ColorBoxes colors={colors} />
      <ColorBoxes colors={colors} />
      <ColorBoxes colors={colors} />
      <ColorBoxes colors={colors} />
      {/* <Clicker /> */}
      {/* <PropertyCard properties={properties} /> */}
      {/* <ShoppingList items={data} />
      <Heading color="blue" fontSize="20px" />
      <DoubleDice />
      <ColorList colors={["red", "pink", "blue", "violet", "yellow"]} />
      <Slot val1={"💕"} val2={"💕"} val3={"💕"} /> */}
    </div>
  );
}

export default App;
