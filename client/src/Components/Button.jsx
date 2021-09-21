export default function Button(props) {
  return (
    <div className="buttons">
      <div className="buttonPlus">
        <button onClick={() => props.handleSubmitPlus(props.id, props.votes)}>
          +
        </button>
      </div>
      <div className="buttonMinus">
        <button onClick={() => props.handleSubmitMinus(props.id, props.votes)}>
          -
        </button>
      </div>
    </div>
  );
}
