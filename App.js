import React, { useState } from 'react';

function App() {
  
  const [ texto, setTexto ] = useState(false)

  function handleClick(){
    setTexto('Gustavo')
  }
  
  return (
    <div className="App">
      <button data-testid="button-teste" type="button" onClick={handleClick} >Enviar</button>
      {texto ? texto : null}
    </div>
  );
}

export default App;
