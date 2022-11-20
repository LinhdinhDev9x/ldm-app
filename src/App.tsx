import { useEffect, useState } from 'react';
import './App.css';
export interface ldModel{
  name: string,
  address: string,
}
function App() {
  const [count, setCount] = useState(true)
  useEffect(() => {
    setCount(false);
  });
  var model : ldModel={
    name: 'LinhDb',
    address:'Nghệ an',
  }
  return (
    <div className="App">
      <header className="App-header">
          {`${model.name}-${model.address}`}
      </header>
    </div>
  );
}

export default App;
