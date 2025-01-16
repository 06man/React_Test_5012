// 교체 작업 3
import React, { Component } from 'react';
import './App.css'
import RefSample from './component/RefSample'
import ValidationSample from './component/ValidationSample'
import ScrollBox from './component/ScrollBox';

// function App() {
// 함수형 컴포넌트 -> 클래스 형 컴포넌트 변경. 
// 교체 작업 1
class App extends Component {
  // 교체 작업 2
  render() {
    return (
      <>
        <h1 className='react'>ch5 ref, DOM 요소에 이름달기</h1>
        {/* <ValidationSample />
      <RefSample /> */}
        {/* 교체 작업 4 */}
        <ScrollBox />
      </>
    )
  }
}

export default App;
