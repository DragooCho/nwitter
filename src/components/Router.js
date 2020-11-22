import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/home";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <> 
            <Route exact path="/">
              <Home />
            </Route>
          </> 
        ) : ( 
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;

// <>는 Fragment인데 div 같은걸 쓰고싶지 않지만 부모요소가 없을때 많은요소를 렌더링할때 쓴다.
