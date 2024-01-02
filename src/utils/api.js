import axios from "axios";

export const getPokemonById = (id) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.data);
};

export const getPokemonList = (offset, limit) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    .then((response) => response.data);
};

export const getPokemonByName = (nameToFind) => {
  if (!nameToFind) return null;

  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${nameToFind.toLowerCase()}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching Pokemon by name:", error);
      return null;
    });
};
const handleSearch = async () => {
  let answer = await getPokemonByName("");
  let all = [];
  all = [...all, ...answer.results];
  console.log(answer.results);
  if (answer.next) {
    const next = await getPokemonByName(answer.next);
    console.log(next.results);
    all = [...all, ...next.results];
  }
  console.log("all", all);
};

// export const getPokemonByName = async (nameToFind) => {
//   let allPokemon = [];
//   const firstPage = await axios
//     .get(`https://pokeapi.co/api/v2/pokemon`)
//     .then((response) => response.data);
//   allPokemon = firstPage.results;
//   let nextPageURL = firstPage.next;
//   while (nextPageURL) {
//     const secondPage = await axios
//       .get(nextPageURL)
//       .then((response) => response.data);
//     console.log("trial", secondPage);
//     allPokemon = [...allPokemon, ...secondPage.results];
//     nextPageURL = secondPage.next;
//   }
//   return allPokemon.find((e) => (e.name = nameToFind));
// };

export const getPokemonDetails = (url) => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching Pokemon details:", error);
      throw error;
    });
};

export const getPokemonType = () => {
  return axios.get(`https://pokeapi.co/api/v2/type`).catch((error) => {
    console.error("Error fetching Pokémon types:", error);
    throw error;
  });
};

//patch example
// export const updateVotes = (article_id, newVoteCount) => {
//   return axios
//     .patch(`https://akram-nc-news.onrender.com/api/articles/${article_id}`, {
//       inc_votes: newVoteCount, //sending the new vote count
//     })
//     .then((response) => {
//       console.log(
//         "api for updateVotes response data",
//         response.data.articles.votes
//       );
//       return response.data.articles.votes;
//     });
// };
