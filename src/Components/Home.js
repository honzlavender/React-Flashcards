import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api";

const Home = () => {
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  const loadDecks = () => {
    listDecks().then(setDecks);
  };

  useEffect(() => {
    loadDecks();
  }, []);

//function for alert message & delete deck
  const alertMessage = (deckId) => {
    const byeDeck = window.confirm(
      `Delete this deck?\n\nYou will not be able to recover it.`
    );
    if (byeDeck) {
      deleteDeck(deckId);
      history.push("/");
      window.location.reload(false)
    }
  };

  return (
    <>
      <Link to="/decks/new">
        <button type="button" className="btn btn-secondary mb-3">
          <span className="oi oi-plus"></span> Create Deck
        </button>
      </Link>
        {/* to display all decks in DB we map through and create the cards */}
      {decks.map((deck) => (
        <div className="card mb-4" key={decks}>
          <div className="card-body m-1">
            <div className="row">
              <div className="col">
                <h2 className="title text-secondary"> {deck.name}</h2>
              </div>
              <div className="col">
                <p className="num float-right"> {deck.cards.length} cards</p>
              </div>
            </div>
            <p className="card-text">{deck.description}</p>
            <Link to={`/decks/${deck.id}`} className="m-1">
              <button type="button" className="btn btn-secondary">
                <span className="oi oi-eye"></span> View
              </button>
            </Link>
            <Link to={`/decks/${deck.id}/study`} className="m-1">
              <button type="button" className="btn btn-primary">
                <span className="oi oi-spreadsheet"></span> Study
              </button>
            </Link>
            <button
              type="button"
              onClick={() => alertMessage(deck.id)}
              className="btn m-2 btn-danger float-right"
            >
              <span className="oi oi-trash"></span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
