export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <br />
      <textarea
        placeholder="Type Joke Here"
        className="jokeInput"
        type="text"
        value={props.joke}
        onChange={(e) => props.setJoke(e.target.value)}
      />
      <br />

      <input
        placeholder="Type Author Name Here"
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
