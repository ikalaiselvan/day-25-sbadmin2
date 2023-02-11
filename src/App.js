import { useState } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard';
import Sidebar from './Component/Sidebar';
import Contentwrapper from './Component/Contentwrapper';

function App() {
    let [value, setvalue] = useState("");
    let data = {
      monthly: "45,000",
      annualy: "12,00,000",
      task: 40,
      pending: 2,
    };

  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <Dashboard data={data} setvalue={setvalue} value={value}/>
        {/* <Contentwrapper data={data} setvalue={setvalue} value={value} /> */}
      </div>
      hi
    </div>
  );
}

export default App;
