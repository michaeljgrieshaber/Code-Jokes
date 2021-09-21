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
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    async function getJokes() {
      const res = await axios.get(URL, config);
      setJokes(res.data.records);
    }
    getJokes();
  }, [toggle]);

  const handleSubmitPlus = async (id, votes) => {
    const records = [
      {
        id,
        fields: {
          votes: votes + 1,
        },
      },
    ];

    await axios.patch(URL, { records }, config);
    setToggle((toggle) => !toggle);
  };

  const handleSubmitMinus = async (id, votes) => {
    const records = [
      {
        id,
        fields: {
          votes: votes - 1,
        },
      },
    ];

    await axios.patch(URL, { records }, config);
    setToggle((toggle) => !toggle);
  };

  return (
    <div className="home">
      <Navbar />
      Jokes
      <div>
        {jokes.map((joke, id) => {
          return (
            <div className="jokes" key={id}>
              <div className="jokesAndAuthor">
                <h3>{joke.fields.joke}</h3>
                <h3>-{joke.fields.author}</h3>
              </div>
              <div className="votesAndButtons">
                <h3>Votes: {joke.fields.votes}</h3>

                <Button
                  votes={joke.fields.votes}
                  id={joke.id}
                  handleSubmitPlus={handleSubmitPlus}
                  handleSubmitMinus={handleSubmitMinus}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
