import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";
import CardForm from "./CardForm";

function EditCard() {
  const history = useHistory();
  const [deck, setDeck] = useState([]);
  const { deckId, cardId } = useParams();
  const [ card, setCard] = useState([]);
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  useEffect(() => {
    readDeck(deckId).then(setDeck);
    readCard(cardId).then(setCard);
  }, [deckId, cardId, setCard]);

 const handleFrontChange = (event) => setCard({ id: cardId, deckId: deck.id, front: event.target.value, back: card.back });
 const handleBackChange = (event) => setCard({ id: cardId, deckId: deck.id, front: card.front, back: event.target.value });

//submit button
  function saveCardHandler(event) {
    event.preventDefault();
    updateCard(card, { front: cardFront, back: cardBack })
    //.then((resp) => history.push(`/decks/${deck.id}`))
    setCardFront("");
    setCardBack("");
    history.push(`/decks/${deck.id}`)
}

  return (
    <>
      <Breadcrumb
        prePage={deck.name}
        currentPage={`Edit Card ${card.id}`}
        deckId={deckId}
      />
      <div>
        <h1 className="title my-4">Edit Card</h1>
      </div>

      <CardForm
        deckId={deckId}
        handleAddCard={saveCardHandler}
        handleFrontChange={handleFrontChange}
        handleBackChange={handleBackChange}
        firstButton="Cancel"
        secondButton="Submit"
       // front={card.front}
       // back={card.back}
       valueFront={card.front}
       valueBack={card.back}

      />
    </>
  );
}

export default EditCard;
