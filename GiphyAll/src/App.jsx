//import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";

import Search from "./components/Search";
import { Route } from "wouter";
import SearchPage from "./pages/SearchPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OldSearch from "./components/OldSearch";
import { GifContextProvider } from "./context/GifContext";
//cargamos useEffect y useState que son hooks

function App() {
  const [keyword, setKeyword] = useState("");
  const [word, setWord] = useState(localStorage.getItem("keyword"));

  //si no es con estados esto dará un warning, el keyword basicamente será para ver que quiere buscar, lo guardé con ese nombre
  return (
    <div className="App">
      <section className="App-content">
        <Header></Header>
        <Search keyword={keyword} setKeyword={setKeyword} setWord={setWord} />
        <GifContextProvider>
        <Route component={SearchPage} path="/search/:keyword" />
          <Route
            component={() => {
              if (word !== "" && word !== null) {
                return <OldSearch word={word}></OldSearch>;
              } else {
                return <p>No existen busquedas anteriores</p>;
              }
            }}
            path="/"
          />
        </GifContextProvider>
        <Footer></Footer>
      </section>
    </div>
  );
}
export default App;
