import { useState, useEffect } from 'react';
import BlogList from 'BlogList';
export default function Home() {
  let [blogs, setBlogs] = useState([
    { id: 1, title: 'Jancook', body: 'jancook kocok kocok', author: 'bangal' },
    { id: 2, title: 'Asuuu', body: 'Asuu coklat susu', author: 'bangal' },
    { id: 3, title: 'fucking mother ', body: 'yes no yes no ahh ahh', author: 'pornhub' },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('effect run');
    console.log(blogs);
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
