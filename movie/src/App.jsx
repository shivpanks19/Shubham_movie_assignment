import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Moviedata } from './pages/Moviedata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Moviedata/>
    </div>
  )
}

export default App
