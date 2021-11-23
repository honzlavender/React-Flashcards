import { useParams, useHistory } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";
import { useEffect, useState } from "react";
import DeckForm from "./DeckForm";

const EditDeck = () => {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    async function loadDecks() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck);
    }
    loadDecks();
  }, [deckId, setDeck]);

  //pushes edits to deck
  function saveHandler(event) {
    event.preventDefault();
    updateDeck(deck).then((resp) => history.push(`/decks/${deck.id}`));
  }
//handles name edit
  function changeName(event) {
    setDeck({ ...deck, name: event.target.value });
  }

  //handles description edit
  function changeInfo(event) {
    setDeck({ ...deck, description: event.target.value });
  }


  return (
    <>
      <Breadcrumb
        prePage={deck.name}
        currentPage="Edit Deck"
        deckId={deckId}
      />
      <DeckForm
        label="Edit Deck"
        handleNewName={changeName}
        newName = {deck.name}
        handleNewInfo={changeInfo}
        //placeholderName={deck.name}
        //placeholderScript={deck.description}
        newInfo = {deck.description}
        handleCancel={`/decks/${deck.id}`}
        submitButton={saveHandler}
      />
    </>
  );
};

export default EditDeck;
