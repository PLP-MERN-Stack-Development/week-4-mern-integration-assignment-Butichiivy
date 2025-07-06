import './chronicare.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';   // Step 5.3 - Create Post Page
import PostList from './pages/PostList';       // Step 5.3 - View Posts Page

function App() {
  return (
    <Router>
      <div>
        {/* Navbar with React Router Links */}
        <nav>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/create">Create Post</Link></li>       {/* Step 5.3 */}
            <li><Link to="/posts">View Posts</Link></li>         {/* Step 5.3 */}
          </ul>
        </nav>

        {/* Route Switch */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />      {/* Step 5.3 */}
          <Route path="/posts" element={<PostList />} />         {/* Step 5.3 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
