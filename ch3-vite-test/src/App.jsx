import './App.css'
import Mycomponent from './component/Mycomponent'

function App() {
  const name = "리액트"

  return (
    <>
      <h1>{name}</h1>
      <div className="react">{name}</div>
      {/* 자식 컴포넌트 */}
      {/* 순서1, props 이용해서 데이터 전달 예제 */}
      {/* <Mycomponent name="첫 데이터 전달하기 속성은 name으로 전달함." /> */}
      {/* 순서2, props 이용해서 데이터 전달 예제2, 기본값 사용 */}
      {/* <Mycomponent /> */}
      {/* 순서3, children 요소로 데이터 보내기  */}
      {/* <Mycomponent name="동시에 같이 보내기">children 요소로 데이터 보내기 </Mycomponent> */}
      {/* 순서4, props 타입 지정하고, 타입 불일치한 값을 임의로 전달해보기 */}
      <Mycomponent name={3}>children 요소로 데이터 보내기 </Mycomponent>
    </>
  )
}

export default App
