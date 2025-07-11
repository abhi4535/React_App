import Chicken from "./Chicken";
import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./heading";
import ColorList from "./ColorList";
import Slot from "./Slot";

function App() {
  return (
    <div>
      <Heading color="blue" fontSize="20px" />
      <DoubleDice />
      <ColorList colors={["red", "pink", "blue", "violet", "yellow"]} />
      <Slot val1={"💕"} val2={"💕"} val3={"💕"} />
    </div>
  );
}

export default App;
