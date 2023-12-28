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

export const getPokemonDetails = (url) => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching Pokemon details:", error);
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
