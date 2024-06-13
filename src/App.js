import './App.scss';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import TVShows from './Components/TVShows';
import Recently from './Components/Recently'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>

<Routes>
    
<Route exacy path='/' element={<Home />} />
<Route exact path='/tvShow' element={<TVShows/>} />
<Route exact path='/Recently' element={<Recently/>} />
    
</Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
