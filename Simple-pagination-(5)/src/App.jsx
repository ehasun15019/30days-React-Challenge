import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPosts = async (pg) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pg}`
    );
    const data = await res.json();
    if (pg === 1) {
      setPosts(data);
    } else {
      setPosts((prev) => [...prev, ...data]);
    }
  };

  useEffect(() => {
    fetchPosts(1); // প্রথম ১০ load
  }, []);

  const handleNext = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* IMPORTANT: Keep this button clean */}
      <button id="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default App;
