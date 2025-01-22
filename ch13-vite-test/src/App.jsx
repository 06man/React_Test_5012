import './App.css'
// 준비물1
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';

function App() {

  return (
    <>
      <h1 className='react'>ch13 리액트 라우팅</h1>
      <Routes>
        {/* 교체, 
        중첩 라우팅 설정1,
        공통 레이아웃으로 , 1,2,3 번페이지를 묶기. */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        {/* 추가, :username 이부분을 useParams 가져오는 대상. */}
        {/* 예시, http://localhost:5173/profiles/gildong */}
        {/* <Route path="/profiles/:username" element={<Profile />} /> */}
        <Route path="/Articles" element={<Articles />} >
          {/* 중첩 라우팅 설정1, 
          주의사항, 태그의 닫는 부분을 주의, 
        중첩 라우팅 부모 요소의 자식으로 추가 
        <Route>자식요소의 위치</Route>
        */}
          <Route path=":id" element={<Article />} />
        </Route>
        {/* <Route path="/Articles/:id" element={<Article />} /> */}
      </Routes>
    </>
  )
}

export default App
