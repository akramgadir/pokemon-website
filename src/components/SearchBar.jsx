import React, { useEffect, useState } from 'react'
// import { getPokemonByName } from '../utils/api'
import axios from 'axios';
import { getPokemonByName } from '../utils/api';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')


    const handleSearch = async () => {
        console.log('this without an argument')
        const allPokes = await getPokemonByName('Caterpie')
        console.log(allPokes)
    };
      


    useEffect(()=> {
        
    },
    [searchTerm])

  return (
    <>
    <input
        type="text"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        placeholder='Which pokemon do you like...?'
    />
    <button onClick={handleSearch}>Search</button>
    <div></div>
    </>
  )
}

export default SearchBar


































// import React, { useEffect, useState } from 'react'
// import '../styles/SearchBar.css';
// import { getPokemonType } from '../utils/api';

// const SearchBar = () => {
//     const [searchTerm, setSearchTerm] = useState('')
//     const [selectedTypes, setSelectedTypes] = useState('')
//     const [types, setTypes] = useState([])


//     useEffect(() => {
//         const fetchPokemonType = () => {
//             getPokemonType()
//                 .then((typesData) => {
//                     const typeNames = typesData.results.map(type=>type.name);
//                     setTypes(typeNames)
//                 })
//                 .catch(error => {
//                     console.error('Error fetching Pokémon types:', error);
//                   });
//               };

//               fetchPokemonType();
//             }, []);
          

//             const handleSearch = () => {
//                 onSearch(searchTerm, selectedType);
//               };

//   return (
//     <div className='search-bar'>
//         <input 
//             type="text"
//             placeholder='Which Pokemon do you like...?'
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onBlur={handleSearch}
        
//         />    
//         <select
//             value={selectedType}
//             onChange={e => setSelectedType(e.target.value)}
//         >
//             <option value="">All Types</option>
//             {types.map(type => (
//             <option key={type} value={type}>
//                 {type}
//             </option>
//             ))}
//         </select>
//         <button onClick={handleSearch}>Search</button>

//     </div>
//   )
// }

// export default SearchBar