import './App.css';


import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';

//Styles
import {GlobalStyle} from './GlobalStyle';

//Components
import Home from './components/home';
import Header from './components/header';
import { Game } from './components/Game';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/:slug' element={<Game /> }/>
        </Routes>
        <GlobalStyle/>
      </div>
    </Router>
  )
}

export default App;
