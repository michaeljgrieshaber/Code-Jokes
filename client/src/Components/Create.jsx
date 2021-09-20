import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
import Form from "./Form";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/P2`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Create() {
  const [joke, setJoke] = useState("");
  const [author, setAuthor] = useState("");
  const [votes, setVotes] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      joke,
      author,
    };

    await axios.post(URL, { fields }, config);
  };

  return (
    <div>
      <Navbar />
      Create
      <Form
        joke={joke}
        setJoke={setJoke}
        author={author}
        setAuthor={setAuthor}
        handleSubmit={handleSubmit}
        votes={votes}
        setVotes={setVotes}
        type={"Submit"}
      />
    </div>
  );
}
