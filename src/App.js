// import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements,RouterProvider, Route } from "react-router-dom";
import PostWrite from './pages/postWrite.js';
import Main from './pages/main.js';
import PostSell from './pages/postSell.js';
import PostMain from './pages/post.js';

sadffdsafasdfdas
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Main/>}/>
    <Route path="/post-write" element={<PostWrite />}/>
    <Route path="/post-main" element={<PostMain />} />
    <Route path="/post-sell" element={<PostSell />} />
  </Route>
)

const router = createBrowserRouter(routeDefinitions);

function App () {
  return (
    <RouterProvider router={router} />
  )
};

export default App;
