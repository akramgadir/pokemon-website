import Random from '../components/Random'
import Ice from '../components/Ice'
import '../styles/PokemonFont.css';
import '../index.css'

const Home = () => {
  return (
    <div style={{fontFamily: 'Pokemon'}}>
        <Random/>
        <Ice />
    </div>
  )
}

export default Home