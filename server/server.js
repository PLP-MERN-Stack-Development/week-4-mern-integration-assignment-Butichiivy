import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Import routes
import postRoutes from './routes/postRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Mount blog post routes
app.use('/api/posts', postRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error('❌ MongoDB connection error:', error));
