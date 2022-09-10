//import logo from './logo.svg';
import './App.css'
import React, { useState, useRef } from 'react'

import Search from './components/Search'
import { Route, Switch } from 'wouter'
import SearchPage from './pages/SearchPage'
import Header from './components/Header'
import Footer from './components/Footer'
import OldSearch from './components/OldSearch'
import { GifContextProvider } from './context/GifContext'
import GifPage from './pages/GifPage'

//cargamos useEffect y useState que son hooks

function App() {
  const [keyword, setKeyword] = useState('')
  const [word, setWord] = useState(localStorage.getItem('keyword'))
  const refLast = useRef(null)
  //si no es con estados esto dará un warning, el keyword basicamente será para ver que quiere buscar, lo guardé con ese nombre
  return (
    <div className="App">
      <section className="App-content">
        <Header></Header>
        <Search
          refLast={refLast}
          keyword={keyword}
          setKeyword={setKeyword}
          setWord={setWord}
        />
        {word !== '' && word !== null ? (
          <OldSearch word={word}></OldSearch>
        ) : (
          <p>No existen búsquedas anteriores</p>
        )}
        <div ref={refLast}></div>
        <Switch>
          <GifContextProvider>
            <Route component={SearchPage} path="/search/:keyword" />
            <Route component={GifPage} path="/Gif/:id" />
            <Route>404, not found :(</Route>
          </GifContextProvider>
        </Switch>
        <Footer></Footer>
      </section>
    </div>
  )
}
export default App
