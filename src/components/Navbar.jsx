import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import '../index.css'
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
<>
    <nav className='navbar'>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/Explore'>Explore</Link>
        </div>
        <SearchBar className='search-bar' />
    </nav>


</>
    )
}

export default Navbar