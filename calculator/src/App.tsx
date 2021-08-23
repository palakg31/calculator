import {useState} from 'react';
import './App.scss';
import Keypad from './components/Keypad/Keypad';

function App() {
  const [displayString,setdisplayString] = useState('');
  const [currentString,setCurrentString] = useState('');
  const performOperation=()=>{
    console.log(displayString)
  }
  return (
    <div className="App">
      <div className='display'>
        {displayString}
      </div>
      <Keypad onClick={(label:string)=>{
        setCurrentString(label);
        if(label!=='=')setdisplayString(displayString+label); 
        else performOperation();
      }}/>
    </div>
  );
}

export default App;
