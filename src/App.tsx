import { useState } from "react";
import "./App.scss";
import Keypad from "./components/Keypad/Keypad";
import { utils } from "./utils";

function App() {
  const [displayString, setdisplayString] = useState("");

  const performOperation = (key: any) => {
    try {
      if (key.operation === "default")
        setdisplayString((prev) => prev + key.label);
      else {
        let result = "";
        if (
          key.operation === "cancel" ||
          key.operation === "delete" ||
          key.operation === "equals" ||
          displayString.split("").every((c) => "0123456789".includes(c))
        ) {
          result = utils[key.operation](displayString);
          setdisplayString(result);
        } else {
          result = utils[key.operation](displayString.slice(-1));
          setdisplayString((prev) => prev.slice(0, prev.length - 1) + result);
        }
      }
    } catch (e) {
      console.log(e);
      setdisplayString("Sorry! Wrong Input. Press 'C' to continue.");
    }
  };

  return (
    <div className="App">
      <div className="display">{displayString}</div>
      <Keypad onClick={(key: any) => performOperation(key)} />
    </div>
  );
}

export default App;
