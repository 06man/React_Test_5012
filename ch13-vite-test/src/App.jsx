import './App.css'
// 준비물1
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {

  return (
    <>
      <h1 className='react'>ch13 리액트 라우팅</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
