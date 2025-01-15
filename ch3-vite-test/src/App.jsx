import './App.css'
import Mycomponent from './component/Mycomponent'

function App() {
  const name = "리액트"

  return (
    <>
      <h1>{name}</h1>
      <div className="react">{name}</div>
      {/* 자식 컴포넌트 */}
      <Mycomponent name="첫 데이터 전달하기 속성은 name으로 전달함." />
    </>
  )
}

export default App
