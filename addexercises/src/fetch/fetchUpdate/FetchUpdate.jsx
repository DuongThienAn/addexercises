function FetchUpdate() {
  const handleUpdate = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Tiêu đề đã cập nhật",
        body: "Nội dung mới",
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Updated:", data));
  };

  return (
    <div>
      <h3>UPDATE</h3>
      <button onClick={handleUpdate}>Update Post</button>
    </div>
  );
}

export default FetchUpdate;
