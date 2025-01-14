import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
function App() {
  const [count, setCount] = useState(0)

  //JSX 라는 문법은 , 우리가 보기에는 마치 HTML 문법 처럼 보이지만, 


  // JSX 문법이고, 실제 동작은 위의 
  // 실제 동작은. 
  // return React.createElement("div", null, "Hello ", React.createElement ("b", null, "react"));
  return (
    // <div>
    //   Hello 리액트 
    // </div>
    // <div>
    // <fragment>
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
    // </fragment>
    // </div>
  )
}

export default App
