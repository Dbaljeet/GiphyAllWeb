import React from 'react'
import { Route, Switch } from 'wouter'

import Footer from './components/Footer'
import Principal from './components/Principal'

import SearchPage from './pages/SearchPage'
import GifPage from './pages/GifPage'
import Error from './pages/404'
import Favorites from './pages/Favorites'

import './App.css'
import { Toaster } from 'sonner'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Toaster richColors />
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
