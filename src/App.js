import React from "react";
import Header from "./component/header/header";
import Catalogs from "./component/catalog/catalogs";
import Footer from "./component/footer/footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Catalogs />
      <Footer />
    </div>
  );
}

export default App;
