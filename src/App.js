import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Banners from './components/Banners'
import Footer from './components/Footer.'
import Contact from './components/Contact'
import './App.css';

const App = () => (
      <div className="App">
          <Header/>
          <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/contact" component={Contact} />

          </Switch>
          <Banners/>
          <Footer/>

      </div>
    );

export default App
