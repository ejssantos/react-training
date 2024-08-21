function NewPost() {
  function changeBodyHandler(event) {
    console.log(event.target.value);
  }

  return (
    <form action="">
      <p>
        <label htmlFor="body">Text</label>
        <textarea name="txtBody" id="body" required rows={3}></textarea>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  )
}

export default NewPost;