import { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',     // Replace with real user ID if you have auth
    category: '',   // Replace with real category ID
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/posts', formData);
      setMessage('✅ Post created successfully!');
      console.log(response.data);
    } catch (error) {
      console.error(error.response?.data);
      setMessage('❌ Failed to create post.');
    }
  };

  return (
    <div className="form-container">
      <h2>Create Blog Post</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author ID"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category ID"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
