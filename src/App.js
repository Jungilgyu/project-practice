import React from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Search from './components/Search/Search.jsx';
import PostWrite from './pages/postWrite.js';


function App() {
  // const navigate = useNavigate();

  // const barterWrite = () => {
  //   navigate('/post-write')
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/post-write" element={<PostWrite />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
