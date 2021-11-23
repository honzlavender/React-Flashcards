import { Link } from "react-router-dom";
//import { useState } from "react";

const CardForm = ({
  deckId, //for links and when deck # is displayed
  handleAddCard, //onSubmit
  handleBackChange, //onChange
  handleFrontChange, //onChange
  firstButton, //because addcard and edit card both needed same btns sans names i made a param
  secondButton,
  valueFront, //defaultValue
  valueBack, //defaultvalue
  }) => {
  return (
    <div>
      <form onSubmit={handleAddCard}>
        <form className="add-form">
          <div className="form">
            <h5 class="text-secondary">Front</h5>
            <textarea
              className="add-form"
              type="text"
              rows={2}
              defaultValue={valueFront}
              onChange={handleFrontChange}
              placeholder="Front side of card"
              style={{ width: "100%", borderColor: "lightgray" }}
            />
          </div>
          <div className="form">
            <h5 class="text-secondary">Back</h5>
            <textarea
              className="add-form"
              type="text"
              rows={2}
              defaultValue={valueBack}
              onChange={handleBackChange}
              placeholder="Back side of card"
              style={{ width: "100%", borderColor: "lightgray" }}
            />
          </div>
        </form>
        <div class="buttons">
          <Link
            to={`/decks/${deckId}`}
            type="button"
            class="btn btn-secondary m-1"
          >
            {firstButton}
          </Link>
          <button 
            type="submit" 
            class="btn btn-primary m-1" 
            onClick={handleAddCard}
            //disabled={!valueBack || valueFront}
            >
            {secondButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
