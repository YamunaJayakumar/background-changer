import React, { useState } from 'react'
import './App.css'

function App() {
  const [divStyle, setDivStyle] = useState({ backgroundColor: '', height: '100vh' });

  const changecolor = (btncolor) => {
    setDivStyle({ backgroundColor: btncolor, height: '100vh' });

  }

  return (
    <>
      <div id='main' style={divStyle} className="d-flex justify-content-center align-items-center">
    
        <div className="p-5 bg-light  d-flex justify-content-center align-items-center gap-2 shadow rounded flex-wrap">
          <button onClick={() => changecolor('red')} className="btn border rounded shadow btn-danger px-5 py-3">Red</button>
          <button onClick={() => changecolor('green')} className="btn border rounded shadow  btn-success px-5 py-3">green</button>
          <button onClick={() => changecolor('yellow')} className="btn border rounded shadow  btn-warning px-5 py-3 text-light">Yellow</button>
          <button onClick={() => changecolor('blue')} className="btn border rounded shadow  btn-primary px-5 py-3">Blue</button>
          <button onClick={() => changecolor('purple')} className="btn border rounded shadow   px-5 py-3 text-light" style={{ backgroundColor: 'purple' }}>Purple</button>
          <button onClick={() => changecolor('teal')} className="btn border rounded shadow  btn-info  px-5 py-3 text-light">Teal</button>
          <button onClick={() => changecolor('black')} className="btn border rounded shadow  btn-dark px-5 py-3">Black</button>
        </div>
      </div>
    </>
  )
}

export default App
