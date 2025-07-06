import { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error('❌ Failed to fetch posts:', err);
      });
  }, []);

  return (
    <div className="posts-container">
      <h2>All Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>Author ID: {post.author}</small><br />
            <small>Category ID: {post.category}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;
