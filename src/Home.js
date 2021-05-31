import { useState } from 'react';
export default function Home() {
  let [blogs, setBlogs] = useState([
    { id: 1, title: 'Jancook', body: 'jancook kocok kocok', author: 'bangal' },
    { id: 2, title: 'Asuuu', body: 'Asuu coklat susu', author: 'benga' },
    { id: 3, title: 'fucking mother ', body: 'yes no yes no ahh ahh', author: 'pornhub' },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>Title is {blog.title}</h2>
          <small>Author is {blog.author}</small>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
}
