import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Explore from './pages/Explore';
import Navbar from './components/Navbar';
import Random from './components/Random';
import Randomizer from './pages/Randomizer';



function App() {
  return  (
    <Router>
      
      <Navbar/>


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Randomizer" element={<Random />} />
      </Routes>

    </Router>
  )
}

export default App;
