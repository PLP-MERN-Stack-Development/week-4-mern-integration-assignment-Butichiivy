import express from 'express';
import slugify from 'slugify';
import Post from '../models/Post.js';

const router = express.Router();

// Create a new blog post
router.post('/', async (req, res) => {
  try {
    const { title, content, author, category } = req.body;

    if (!title || !content || !author || !category) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Generate slug
    const slug = slugify(title, { lower: true, strict: true });

    const newPost = new Post({ title, content, author, category, slug });
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error('❌ Error creating post:', error.message);
    res.status(500).json({ message: 'Failed to create post', error: error.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author').populate('category');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
});

// Add comment to a post
router.post('/:postId/comments', async (req, res) => {
  try {
    const { content, userId } = req.body;

    if (!content || !userId) {
      return res.status(400).json({ message: 'Content and user ID are required' });
    }

    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.comments.push({ user: userId, content });
    await post.save();

    res.status(201).json({ message: 'Comment added successfully', post });
  } catch (error) {
    console.error('❌ Error adding comment:', error.message);
    res.status(500).json({ message: 'Failed to add comment', error: error.message });
  }
});

export default router;
