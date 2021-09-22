export default function Button(props) {
  return (
    <div className="buttons">
      <div>
        <button
          className="buttonPlus button"
          onClick={() => props.handleSubmitPlus(props.id, props.votes)}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="buttonMinus button"
          onClick={() => props.handleSubmitMinus(props.id, props.votes)}
        >
          -
        </button>
      </div>
    </div>
  );
}
