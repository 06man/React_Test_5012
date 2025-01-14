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

  const name = '리액트';

  return (
    // 순서1
    // <div>
    //   Hello 리액트 
    // </div>

    //순서2
    // <div> 
    // 순서3
    // <fragment>
    // 순서4
    // <>
    //   <h1>리액트 안녕!</h1>
    //   <h2>잘 작동하니? {name}</h2>
    // </>
    // </fragment>
    // </div>
    //순서5
    // <div>
    //   {name === '리액트2' ? (
    //     <h1>리액트입니다.</h1>
    //   ) : (
    //     <h2>리액트가 아닙니다.</h2>
    //   )}
    // </div>

    //순서6
    // A && B, A 참인 경우만, B를 그려준다.
    <div>
      {
        name === '리액트' && <h1>리액트입니다.</h1>
      }
    </div>
  )
}

export default App
