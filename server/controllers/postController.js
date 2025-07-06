import Post from '../models/Post.js';

// @desc    Create a new post
export const createPost = async (req, res) => {
  try {
    const { title, content, author, category } = req.body;

    const newPost = new Post({
      title,
      content,
      author,
      category,
      slug: title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-'),
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author category');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get a single post
export const getPostBySlug = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug }).populate('author category');
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Update a post
export const updatePost = async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Delete a post
export const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted', deleted });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
