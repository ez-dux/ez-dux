import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { Examples } from './Examples';
import { Home } from './Home';

export const Navigation = () => {
  return (
    <Router>
      <div>
        <header className="border-black h-20 w-full p-1 flex align-center bg-purple-100 fixed shadow">
          <h6 className="text-purple-700 text-lg font-semibold my-auto p-4">
            ez-dux
          </h6>
          <h6
            className="text-purple-500 text-lg font-semibold my-auto p-4"
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send?phone=5548991012435&text=hi!',
                '_blank'
              )
            }
          >
            redux mentoring?
          </h6>
        </header>

        <Switch>
          <Route path="/examples">
            <Examples />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer className="bg-black h-40 p-6">
          <a className="text-white" href="https://portfolio-wag.web.app/">
            https://portfolio-wag.web.app/
          </a>
        </footer>
      </div>
    </Router>
  );
};
