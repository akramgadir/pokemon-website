import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import '../index.css'
import SearchBar from './SearchBar';
import Randomizer from '../pages/Randomizer';

const Navbar = () => {
  return (
<>
    <nav className='navbar'>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/Explore'>Explore</Link>
            <Link to='/Randomizer'>Randomizer</Link>
        </div>
        <SearchBar className='search-bar' />
    </nav>


</>
    )
}

export default Navbar