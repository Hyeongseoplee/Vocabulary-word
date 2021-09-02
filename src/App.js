import React from "react";
import Header from './components/Header';
import Daylist from "./components/Daylist";
import Words from "./components/Words";
import EmptyPage from './EmptyPage';
import CreateWord from './components/CreateWord';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <main className="main">
      <Header/>
        <Switch>
          <Route path= '/' exact>
            <Daylist/>
            </Route>
          <Route path= '/words/:day'>
            <Words/>
          </Route>
          <Route path= '/create_word'>
            <CreateWord/>
          </Route>
          <Route>
            <EmptyPage/>
          </Route>
        </Switch>
    </main>
    </BrowserRouter>
  )
}

export default App;
