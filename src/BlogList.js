import React from 'react';

export default function BlogList({ blogs, title, handleDelete }) {
  return (
    <div className="blog-preview">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>Title is {blog.title}</h2>
          <small>Author is {blog.author}</small>
          <p>{blog.body}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
