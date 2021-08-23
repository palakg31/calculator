import { useState } from "react";
import "./App.scss";
import Keypad from "./components/Keypad/Keypad";

function App() {
  const [displayString, setdisplayString] = useState("");

  const performOperation = (op: string) => {
    try {
      if (op === "Cancel") setdisplayString("");
      else if (op === "delete")
        setdisplayString(displayString.slice(0, displayString.length - 1));
      else if (op === "=") setdisplayString(eval(displayString));
      else setdisplayString(displayString + op);
    } catch (e) {
      setdisplayString("Sorry! Cannot proceed with this input. Press 'C' to continue.");
    }
  };

  return (
    <div className="App">
      <div className="display">{displayString}</div>
      <Keypad onClick={(op: string) => performOperation(op)} />
    </div>
  );
}

export default App;
