import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import '../componentscss/Blog.css';


function BlogPost() {
  const { postId } = useParams();
  const location = useLocation();
  const { post } = location.state || {};

  // Debugging logs (remove in production)
  console.log("Post ID from URL:", postId);
  console.log("Post data received:", post);

  // Handle missing post data
  if (!post) {
    return (
      <div id='blog-post-container'>
        <h2 id='blog-post-title'>Post Not Found</h2>
        <p>The requested blog post could not be found.</p>
        <Link to="/blog" id='blog-back-link' aria-label="Go back to the blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div id='blog-post-container'>
      <h2 id='blog-post-title'>{post.title}</h2>
      <p id='blog-post-date'>{post.date}</p>
      <div 
        id='blog-post-content'
        dangerouslySetInnerHTML={{ __html: post.fullContent }}
      />
      <Link to="/blog" id='blog-back-link' aria-label="Go back to the blog">← Back to Blog</Link>
    </div>
  );
}

export default BlogPost;