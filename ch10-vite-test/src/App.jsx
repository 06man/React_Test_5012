import { useState } from 'react'

import './App.css'
import TodoTemplate from './components/TodoTemplate'

function App() {


  return (
    <>
      <h1 className='react'>ch10 일정관리 애플리케이션 예제</h1>
      <TodoTemplate>Todo App을 만들자!</TodoTemplate>;
    </>
  )
}

export default App
