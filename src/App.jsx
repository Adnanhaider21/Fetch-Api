import { useState } from 'react'
import React from 'react'

import './App.css'
import DataList from './DataList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DataList />
    </div>
  );
  
}

export default App
