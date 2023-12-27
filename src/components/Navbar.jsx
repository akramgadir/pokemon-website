import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import '../index.css'

const Navbar = () => {
  return (
<>
    <nav>        
        <Link to='/'>Home</Link>
        <Link to='/'>Explore</Link>

    </nav>
</>
    )
}

export default Navbar