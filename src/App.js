import React from 'react';
import './App.css';
import Button from './Button.js'

function App() {
  const objeto = [
    {
      text: "para Alert",
      onClick: () => alert("Deu Alert")
    },
    {
      text: "para log no console",
      onClick: () => console.log("deu console")
    }
  ]
 
  return (
    <div className="App">
      <header className="App-header">
       {
         objeto.map((obj) =>{
           return <Button {...obj}/>
         })
       }
      </header>
    </div>
  );
}
export default App;

