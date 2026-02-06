function FetchPost() {
  const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Bài viết mới",
        body: "Đã Post",
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Created:", data));
  };

  return (
    <div>
      <h3>POST</h3>
      <button onClick={handlePost}>Add Post</button>
    </div>
  );
}

export default FetchPost;
