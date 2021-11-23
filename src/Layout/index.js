import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
//import all the routes
import Home from "../Components/Home";
import StudyDeck from "../Components/Decks/StudyDeck";
import CreateDeck from "../Components/Decks/CreateDeck"
import ViewDeck from "../Components/Decks/ViewDeck"
import EditDeck from "../Components/Decks/EditDeck"
import AddCard from "../Components/Cards/AddCard"
import EditCard from "../Components/Cards/EditCard"

function Layout() {


  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        
        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>

          <Route  path ="/decks/:deckId/study">
            <StudyDeck />
          </Route>
          
          <Route path ="/decks/new">
            <CreateDeck />
          </Route>

          <Route exact path ="/decks/:deckId">
            <ViewDeck />
          </Route>

          <Route path ="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path ="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path ="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
