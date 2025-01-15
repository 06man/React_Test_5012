import './App.css'
import Mycomponent from './component/Mycomponent'

function App() {
  const name = "리액트"

  return (
    <>
      <h1>{name}</h1>
      <div className="react">{name}</div>
      <Mycomponent />
    </>
  )
}

export default App
