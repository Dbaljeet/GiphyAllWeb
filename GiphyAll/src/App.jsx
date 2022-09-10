//import logo from './logo.svg';
import './App.css'
import React from 'react'
import { Route, Switch } from 'wouter'
import SearchPage from './pages/SearchPage'
import Footer from './components/Footer'
import Principal from './components/Principal'
import { GifContextProvider } from './context/GifContext'
import GifPage from './pages/GifPage'

function App() {
  //si no es con estados esto dará un warning, el keyword basicamente será para ver que quiere buscar, lo guardé con ese nombre
  return (
    <div className="App">
      <section className="App-content">
        <Principal />
        <Switch>
          <GifContextProvider>
            <Route component={SearchPage} path="/search/:keyword" />
            <Route component={GifPage} path="/Gif/:id" />
            <Route component={<h2>404, not found :(</h2>} path="/404" />
          </GifContextProvider>
        </Switch>
        <Footer></Footer>
      </section>
    </div>
  )
}
export default App
