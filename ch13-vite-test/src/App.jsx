import './App.css'
// 준비물1
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {

  return (
    <>
      <h1 className='react'>ch13 리액트 라우팅</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 추가, :username 이부분을 useParams 가져오는 대상. */}
        {/* 예시, http://localhost:5173/profiles/gildong */}
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
