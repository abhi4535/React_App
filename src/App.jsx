import Chicken from "./Chicken";
import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./heading";

function App() {
  return (
    <div>
      <Heading color="blue" fontSize="20px" />
      <DoubleDice />
    </div>
  );
}

export default App;
