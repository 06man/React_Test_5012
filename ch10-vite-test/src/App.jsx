import { useState } from 'react'

import './App.css'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
  // 더미 데이터 추가1
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  return (
    <>
      <h1 className='react'>ch10 일정관리 애플리케이션 예제</h1>
      <TodoTemplate>
        {/* Todo App을 만들자! */}
        <TodoInsert />
        {/* 더미 데이터 추가2  props 로 전달. */}
        <TodoList todos={todos} />
      </TodoTemplate>;

    </>
  )
}

export default App
