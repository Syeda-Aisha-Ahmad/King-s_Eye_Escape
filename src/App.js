import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import "./styles/output.css";

import Home from './Home/Main';
import EscapeRoom from './EscapeRooms/Main';
import AxeLounge from './AxeThrowing/Main';
import Directions from './Directions/Main';
import BookNow from './Booking/Main';
import Resova from './Resova/Main';
import Nav from './NavBar/Main';
import Footer from './Footer/Main';

const App = () => {


  return (
    <>
    <Nav />
    <AnimatePresence exitBeforeEnter inital={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/escape_rooms/">
          <EscapeRoom />
        </Route>
        <Route path="/axe_lounge">
          <AxeLounge />
        </Route>
        <Route path="/directions">
          <Directions />
        </Route>
        <Route path="/book_now">
          <BookNow />
        </Route>
        <Route path="/resova">
          <Resova />
        </Route>
      </Switch>
    </AnimatePresence>
    <Footer />
    </>
  );
};

export default App;