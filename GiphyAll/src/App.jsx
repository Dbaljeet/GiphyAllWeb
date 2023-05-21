import './App.css'
import React from 'react'
import { Route, Switch } from 'wouter'
import SearchPage from './pages/SearchPage'
import Footer from './components/Footer'
import Principal from './components/Principal'
import GifPage from './pages/GifPage'
import Error from './pages/404'
import Favorites from './pages/Favorites'
function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Principal />
        <Switch>
          <Route component={SearchPage} path="/search/:keyword" />
          <Route component={GifPage} path="/Gif/:id" />
          <Route component={Favorites} path="/favs" />
          <Route component={Error} path="/:some" />
        </Switch>
        <Footer />
      </section>
    </div>
  )
}
export default App
