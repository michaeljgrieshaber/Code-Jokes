import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Button from "./Button";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/P2`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Home() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    async function getJokes() {
      const res = await axios.get(URL, config);
      setJokes(res.data.records);
    }
    getJokes();
  }, []);

  return (
    <div>
      <Navbar />
      Home
      <div>
        {jokes.map((joke, id) => {
          return (
            <div className="jokes" key={id}>
              <h3>{joke.fields.joke}</h3>
              <h3>-{joke.fields.author}</h3>
              <h3>Votes: {joke.fields.votes}</h3>
              <Button />
            </div>
          );
        })}
      </div>
    </div>
  );
}
