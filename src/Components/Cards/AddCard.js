import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";
import CardForm from "./CardForm"

function AddCard() {
  const history = useHistory();
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");


  useEffect(() => {
    readDeck(deckId) // fetch data from readDeck, change deck/deckId values with setDeck
      .then((data) => setDeck(data))
      .catch((err) => console.log(err));
  }, [deckId]);

  //handlers to update the info on selected card
  const handleFrontChange = (event) => setCardFront(event.target.value); 
  const handleBackChange = (event) => setCardBack(event.target.value); 

  // Submit Form
  const handleAddCard = (event) => {
    event.preventDefault();
    createCard(deckId, { front: cardFront, back: cardBack });
    setCardFront(""); 
    setCardBack("");
    history.push(`/decks/${deck.id}`);
  };

    return (
        <>
        <Breadcrumb prePage={deck.name} currentPage="Add Card" deckId={deckId}/>
        <div>
          <h1 className="title ml-1">{deck.name} : Add Card</h1>
        </div>

        <CardForm 
          deckId={deckId} 
          handleAddCard={handleAddCard} 
          handleFrontChange={handleFrontChange}
          handleBackChange={handleBackChange}
          firstButton="Done"
          secondButton="Save"
          valueFront={cardFront}
          valueBack={cardBack}  
          //front="Front side of card"
          //back="Back side of card"
          />
        
      </>
    )
}

export default AddCard
