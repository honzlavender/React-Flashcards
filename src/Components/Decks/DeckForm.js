import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import { useState } from "react";

//ok i have a ton of parameters as this component supports CreateDeck and EditDeck forms
//further info for each is as follows
const DeckForm = ({ 
  label, //labe
  handleNewName, //onChange
  newName, //defaultValue
  handleNewInfo, //onChange
  newInfo, //defaultValue
  handleCancel, //link for cancel btn
  submitButton, //onClick for submit
}) => {

  return (
    <>
      <label>
        <h1>{label}</h1>
      </label>
      <form className="form">
        <h6>Name</h6>
        <input
          className="input mb-3"
          type="text"
          defaultValue={newName}
          onChange={handleNewName}
          placeholder="Name"
          style={{ width: "100%", borderColor: "lightgray" }}
          
        />
        <h6>Description</h6>
        <textarea
          className="description"
          type="text"
          rows={4}
          defaultValue={newInfo}
          onChange={handleNewInfo}
          placeholder= "Description"
          style={{ width: "100%", borderColor: "lightgray" }}
        />
        <Link
          to={handleCancel}
          type="submit"
          className="btn btn-secondary mr-2"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={!newInfo || !newName}
          className="btn btn-primary"
          onClick={submitButton}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default DeckForm;
