import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Explore from './pages/Explore';
import Navbar from './components/Navbar';



function App() {
  return  (
    <Router>
      
      <Navbar/>


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/Explore" element={<Explore />} />
      </Routes>

    </Router>
  )
}

export default App;
