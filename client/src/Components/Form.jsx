export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Joke:</label>
      <input
        type="text"
        value={props.joke}
        onChange={(e) => props.setJoke(e.target.value)}
      />
      <br />

      <label>Author:</label>
      <input
        type="text"
        value={props.author}
        onChange={(e) => -props.setAuthor(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={props.votes}
        // onChange={(e) => -props.setAuthor(e.target.value)}
      />
      <br />

      <button>{props.type}</button>
    </form>
  );
}
