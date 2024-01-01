import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import '../index.css'
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
<>
    <nav>        
        <Link to='/'>Home</Link>
        <Link to='/Explore'>Explore</Link>
        <SearchBar/>
    </nav>
</>
    )
}

export default Navbar