import Breadcrumb from "../Breadcrumb";
import DeckForm from "./DeckForm";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import { useState } from "react";

const CreateDeck = () => {
  const history = useHistory();
  const [newName, setNewName] = useState("");
  const [newInfo, setNewInfo] = useState("");

  //func for submit button to be added to decklist
  async function submitButton(event) {
    event.preventDefault();
    const newDeck = { name: newName, description: newInfo };
    const resp = await createDeck(newDeck);
    history.push(`/decks/${resp.id}`);
  }

  //handlers to update inputted info for name and description
  const handleNewName = (e) => setNewName(e.target.value);
  const handleNewInfo = (e) => setNewInfo(e.target.value);


  return (
    <>
      <Breadcrumb currentPage="Create Deck" />
      <DeckForm
        label="Create Deck"
        handleNewName={handleNewName}
        newName = {newName}
        handleNewInfo={handleNewInfo}
        placeholderName="Deck Name"
        placeholderScript="Brief description of the deck"
        newInfo = {newInfo}
        handleCancel="/"
        submitButton={submitButton}
      />
    </>
  );
};

export default CreateDeck;
