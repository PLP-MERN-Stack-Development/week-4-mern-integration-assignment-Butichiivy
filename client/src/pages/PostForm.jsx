import { useState } from "react";
import axios from "axios";

function PostForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "", // You can hardcode this for now
    category: "", // Same here
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await axios.post("http://localhost:5000/api/posts", formData);
      setMessage("✅ Post created successfully!");
      setFormData({ title: "", content: "", author: "", category: "" });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to create post");
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required /><br />
        <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Content" required /><br />
        <input name="author" value={formData.author} onChange={handleChange} placeholder="Author ID" required /><br />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category ID" required /><br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PostForm;
