import React from 'react';
import { Routes, Route, BrowserRouter, useNavigate, Link } from 'react-router-dom';
import Search from './components/Search/Search.jsx';
import PostWrite from './pages/postWrite.js';
import Main from './pages/main.js';

function App() {
  // const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

  // const postWrite = () => {
  //   navigate('/post-write'); // 버튼이 클릭되면 '/post-write' 경로로 이동합니다.
  // };
  
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to='/'>home</Link>
        </div>
        <div>
          {/* 버튼이 클릭되면 postWrite 함수를 호출하여 '/post-write' 페이지로 이동합니다. */}
          <Link to='/post-write'>글쓰기</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post-write" element={<PostWrite />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
