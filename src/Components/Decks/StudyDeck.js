import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";
import NotEnough from "../Cards/NotEnough";

const StudyDeck = () => {
  const history = useHistory();
  const [deck, setDeck] = useState({cards: []});
  const { deckId } = useParams();
  //creating an object with each default made the most sense to me
  const [study, setStudy] = useState({
    cards: [],
    currentCard: 0,
    cardTotal: 0,
    front: true,
    flip: false,
  });

  useEffect(() => {
    async function loadDecks() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck);
      setStudy({
        cards: loadedDeck.cards,
        currentCard: 0,
        cardTotal: loadedDeck.cards.length,
        front: true,
        flip: false,
      });
    }
    loadDecks();
  }, [deckId]);

  //a conditional for a deck with 2 or less cards
  if (study.cards.length <= 2) {
    return (
      <>
        <Breadcrumb
          prePage={deck.name}
          currentPage=" &nbsp;&nbsp;/&nbsp; Study"
          deckId={deckId}
        />
        <div className="card-body">
          <h1>{deck.name}: Study</h1>
          <NotEnough cardNum={deck.cards.length} deckId={deckId}/>
        </div>
      </>
    );
  }

  //little func to get the card # on the front and back
  function cardOfCard() {
    return `${study.currentCard + 1} of ${study.cardTotal}`;
  }

    //func to flip that card
    const handleFlip = () => {
        setStudy({ ...study, front: !study.front, flip: true });
      };

  //little func to pull data from front and back and show accordingly
  function cardInfo() {
    return study.front
      ? study.cards[study.currentCard].front
      : study.cards[study.currentCard].back;
  }

  //func showing last card
  function lastCard() {
      return study.currentCard >= study.cardTotal -1;
  }
  //func showing next card
  function nextCard() {
      if (lastCard()) {
          if(window.confirm("Restart cards?\n\nClick 'cancel' to returrn to home page")) {
              setStudy({
                  ...study,
                  currentCard: 0,
                  flip: false,
                  front: true,
              });
          } else {
              history.push("/");
          } 
      } else {
          setStudy({
          ...study,
          currentCard: study.currentCard + 1,
          flip: false,
          front: true,
          });
      }
  }

  //func showing next button if we're on the back of the card
  function nextButton() {
    return study.flip ? (
      <button type="button" className="btn btn-primary m-1" onClick={nextCard}>
        Next
      </button>
    ) : null;
  }

  return (
    <>
      <Breadcrumb
        prePage={deck.name}
        currentPage=" &nbsp;&nbsp;/&nbsp; Study"
        deckId={deckId}
      />
      <label>
        <h1>Study: {deck.name}</h1>
      </label>
      <div className="card">
        <div className="card-body">
          <h6>Card {cardOfCard()}</h6>
          <p>{cardInfo()}</p>
          <button 
          className="btn btn-secondary" 
          onClick={handleFlip}
          >
            Flip
          </button>
          {nextButton()}
        </div>
      </div>
    </>
  );
};

export default StudyDeck;
