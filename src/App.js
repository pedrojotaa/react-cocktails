import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/cocktail:id' element={<SingleCocktail/>}/>
        <Route exact path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
