import { Link } from "react-router-dom";

//because the grammar was upsetting me i made conditional for 0, 1, and 2 cards
const NotEnough = ({ cardNum, deckId }) => {
  function niceGrammar() {
    if (cardNum === 0) {
      return (
        <>
          <p className="mt-4">{`You need at least 3 cards to study. There are no cards in this deck.`}</p>
        </>
      );
    } else if (cardNum === 1) {
      return (
        <>
          <p>{`You need at least 3 cards to study. There is only ${cardNum} card in this deck.`}</p>
        </>
      );
    } else {
      return (
        <>
          <p>{`You need at least 3 cards to study. There are only ${cardNum} cards in this deck.`}</p>
        </>
      );
    }
  }
  return (
    <div>
      <h2 className="mt-4">Not Enough Cards</h2>
      {niceGrammar()}
      <Link to={`/decks/${deckId}/cards/new`} className="m-1">
        <button className="btn btn-primary">
          <span className="oi oi-plus"></span> Add Cards
        </button>
      </Link>
    </div>
  );
};

export default NotEnough;
