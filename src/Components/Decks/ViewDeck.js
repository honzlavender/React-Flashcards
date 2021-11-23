import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { deleteCard, deleteDeck, readDeck } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";


//I created this based on the homepage since it had a similar setup
const ViewDeck = () => {
  const [deck, setDeck] = useState({ cards: [] });
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  const alertMessage = (deckId) => {
    const byeDeck = window.confirm(
      `Delete this deck?\n\nYou will not be able to recover it.`
    );
    if (byeDeck) {
      deleteDeck(deckId);
      history.push("/");
      window.location.reload(true)
    }
  };

  const alertMessageCard = (cardId) => {
    const byeCard = window.confirm(
      `Delete this card?\n\nYou will not be able to recover it.`
    );
    if (byeCard) {
      deleteCard(cardId);
      readDeck(deckId).then(setDeck);
      window.location.reload(false)
    }
  };

  const cardList = deck.cards.map((card) => {
    return (
      <div key={`${card.id}`} className="card">
        <div className="card-body">
          <div className="row mx-1 mt-1">
            <div className="col">{card.front}</div>
            <div className="col">{card.back}</div>
          </div>
          <div className="buttons mt-4">
          <button
            className="btn ml-2 btn-danger float-right"
            onClick={() => alertMessageCard(card.id)}
          >
            <span className="oi oi-trash"></span>
          </button>
          <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}>
            <button type="button" className="btn btn-secondary float-right">
              <span className="oi oi-pencil"></span> Edit
            </button>
          </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Breadcrumb currentPage={deck.name} />
      {/** //className != 'card' means no border :) */}
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h4>{deck.name}</h4>
            <p>{deck.description}</p>
          </div>
        </div>

        <Link to={`/decks/${deckId}/edit`} className="m-1">
          <button type="button" className="btn btn-secondary">
            <span className="oi oi-pencil"></span> Edit
          </button>
        </Link>
        <Link to={`/decks/${deck.id}/study`} className="m-1">
          <button type="button" className="btn btn-primary">
            <span className="oi oi-spreadsheet"></span> Study
          </button>
        </Link>
        <Link to={`/decks/${deckId}/cards/new`} className="m-1">
          <button type="button" className="btn btn-primary">
            <span className="oi oi-plus"></span> Add Cards
          </button>
        </Link>
        <button
          className="btn m-2 btn-danger float-right"
          onClick={() => alertMessage(deck.id)}
        >
          <span className="oi oi-trash"></span>
        </button>
        <h2 className="mt-5">Cards</h2>
        {cardList}
      </div>
    </>
  );
};

export default ViewDeck;
