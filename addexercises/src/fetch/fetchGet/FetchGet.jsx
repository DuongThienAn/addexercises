import { useState } from "react";

function FetchGet() {
  const [posts, setPosts] = useState([]);

  const handleGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  return (
    <div>
      <h3>GET Posts</h3>
      <button onClick={handleGet}>Get Posts</button>

      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchGet;
