import './App.css';

import Home from './components/home';

//Styles
import {GlobalStyle} from './GlobalStyle';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <GlobalStyle/>
    </div>
  )
}

export default App;
