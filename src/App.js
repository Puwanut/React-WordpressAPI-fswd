import { Route, Routes } from 'react-router-dom';
import './App.css'
import MyNavbar from './components/myNavbar';
import AuthorPage from './pages/AuthorPage';
import AuthorPostPage from './pages/AuthorPostPage';
import CategoryPage from './pages/CategoryPage';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

function App() {

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/author/:id" element={<AuthorPostPage />} />
      </Routes>
    </>
  );
}

export default App