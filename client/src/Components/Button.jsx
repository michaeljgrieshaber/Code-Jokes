import axios from "axios";
import { useState, useEffect } from "react";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/P2`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Button(props) {
  const [vote, setVote] = useState(props.votes);
  console.log(props.id);
  console.log(props.votes);
  let prevState = props.votes;

  const handleSubmit = async () => {
    setVote((prevState += 1));

    const records = [
      {
        id: props.id,
        fields: {
          votes: vote,
        },
      },
    ];
    await axios.patch(URL, { records }, config);
  };

  return (
    <div>
      {/* <button>+</button> */}
      {/* <button>-</button> */}

      <button onClick={handleSubmit}>+</button>
      {/* <button onClick={handleSubmit}>-</button> */}
    </div>
  );
}
