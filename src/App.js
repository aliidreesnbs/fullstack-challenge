import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import Login from "./components/Login/login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/profile";
import Details from "./components/Details/Details";
import Thankyou from "./components/Thankyou/Thankyou";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Switch>
              <Route
                exact
                path={"/"}
                render={() => {
                  return <Redirect to={"/products"} />;
                }}
              />
              <Route exact path={"/products"} component={Home} />
              <Route exact path={"/products/:id"} component={ProductDetail} />
              <Route exact path={"/cart"} component={ShoppingCart} />
              <Route exact path={"/login"} component={Login} />
              <Route exact path={"/signup"} component={Signup} />
              <Route exact path={"/profile"} component={Profile} />
              <Route exact path={"/details"} component={Details} />
              <Route exact path={"/thankyou"} component={Thankyou} />
            </Switch>
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
