
import { useState } from 'react';
import './App.css';
import StateAndProps from './StateAndProps';



function App() {
  const [first, setfirst] = useState('shubh')
  const [array,setarray] = useState('[2,8,7,9,6]')
  return (
    <div className="App">
      {first}
      <StateAndProps 
      first={first}
      array={array}
      
      />
      <button onClick={()=>setfirst('shivam')}>change name</button>
      <button onClick={()=>setarray('[8,5,12,7,63]')}> change array</button>

      
    </div>
  );
}

export default App;
