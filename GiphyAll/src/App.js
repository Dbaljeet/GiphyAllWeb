//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import Search from './components/Search';
import {Link,Route} from "wouter"
import SearchPage from './pages/SearchPage';
import Header from './components/Header';
import Footer from './components/Footer';
//cargamos useEffect y useState que son hooks

function App() {
  const [keyword, setKeyword]= useState('');
  const [word, setWord] = useState(localStorage.getItem("keyword"));

  

  //si no es con estados esto dará un warning, el keyword basicamente será para ver que quiere buscar, lo guardé con ese nombre
  return (
    <div className="App">
      <section className="App-content">
        <Header></Header>
        <h2>Busqueda de gifs</h2>

        <Search keyword={keyword} setKeyword={setKeyword} setWord={setWord} />
        <Route 
          component={SearchPage}
          path="/search/:keyword"
          />
        <Route 
          component={()=>{
            if(word !== '' && word!== null){
            return (
              <Link className="container-s" to={`/search/${word}`}>
                <p>Busqueda Pasada</p>
                <img alt="buscar_pasada" className="Busqueda-Pasada" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LACMTA_Circle_Red_Line.svg/1200px-LACMTA_Circle_Red_Line.svg.png"/>
                
              </Link>
            )
            }else{
              return <h2>No existen busquedas anteriores</h2>
            }
          }}
          path="/"
          />
      
      <Footer></Footer>
        
        
        
      </section>
    </div>
  );
}
export default App;
