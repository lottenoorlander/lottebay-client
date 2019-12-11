import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AdvertisementsList from "./components/AdvertisementsList";
import AddAdvertisement from "./components/AddAdvertisement";
import AdvertisementPage from "./components/AdvertisementPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AdvertisementsList} />
        <Route path="/add" component={AddAdvertisement} />
        <Route path="/advertisement/:id" component={AdvertisementPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
