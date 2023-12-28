import axios from "axios";

export const getPokemonById = (id) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.data); // Assuming the API returns the pokemon data directly
};

export const getPokemonList = (offset, limit) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    .then((response) => response.data); // Assuming the API returns the pokemon data directly
};

// export const fetchTopics = () => {
//   return axios
//     .get(`https://akram-nc-news.onrender.com/api/topics`)
//     .then((response) => {
//       return response.data.topics;
//     });
// };

// export const fetchArticleByTopic = (topic) => {
//   return axios
//     .get(`https://akram-nc-news.onrender.com/api/articles/?topic=${topic}`)
//     .then((response) => {
//       return response.data.articles;
//     });
// };

// export const fetchArticleById = (article_id) => {
//   return axios
//     .get(
//       `https://akram-nc-news.onrender.com/api/articles/?article_id=${article_id}`
//     )
//     .then((response) => {
//       return response.data.articles[article_id];
//     });
// };

// //finish this function
// export const getCommentsByArticleId = (article_id) => {
//   return axios
//     .get(
//       `https://akram-nc-news.onrender.com/api/articles/${article_id}/comments`
//     )
//     .then((response) => {
//       return response.data;
//     });
// };

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
