export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <label>Joke:</label>
      <textarea
        className="jokeInput"
        type="text"
        value={props.joke}
        onChange={(e) => props.setJoke(e.target.value)}
      />
      <br />

      <label>Author:</label>
      <input
        className="authorInput"
        type="text"
        value={props.author}
        onChange={(e) => props.setAuthor(e.target.value)}
      />
      <br />

      <button className="button">{props.type}</button>
    </form>
  );
}
