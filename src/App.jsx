import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Coder from './components/Coder'
import Decoder from './components/Decoder'
import logo from './assets/logo.png'

function App() {
  const [type, setType] = useState('default');


  console.log(type)
  return (
    <div className="container">
      {type === 'default' ? 
        <div className="defaultContainer">
          <img src={logo} alt="logo" className="logo"/>
          <div className="btnContainer">
            <button onClick={() => setType('coder')} className="btn">Koder</button>
            <button onClick={() => setType('decoder')} className="btn">Dekoder</button>
          </div>
        </div>
        : type === 'coder' ?
          <Coder setType={setType}/>
        : 
          <Decoder setType={setType}/>
      }
    </div>
  )
}

export default App
