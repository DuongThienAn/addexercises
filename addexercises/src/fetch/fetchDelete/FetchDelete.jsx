function FetchDelete() {
  const handleDelete = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    }).then(() => console.log("Deleted"));
  };

  return (
    <div>
      <h3>DELETE</h3>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}

export default FetchDelete;
