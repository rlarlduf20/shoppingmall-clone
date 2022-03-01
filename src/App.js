import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Prototypes from "./components/Prototypes";
import Orders from "./components/Orders";
import AppStateProvider from "./providers/AppStateProvider";

const App = () => {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
};

export default App;
