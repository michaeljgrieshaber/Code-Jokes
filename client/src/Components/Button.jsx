import axios from "axios";
import { useState } from "react";

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

  const handleSubmit = async () => {
    setVote(() => {
      vote += 1;
    });
    const fields = {
      // votes,
    };

    await axios.patch(URL, { fields }, config);
  };

  return (
    <div>
      <button onClick={handleSubmit}>+</button>
      <button onClick={handleSubmit}>-</button>
    </div>
  );
}
