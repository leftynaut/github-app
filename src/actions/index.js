import axios from 'axios';
import gql from 'graphql-tag';

export const FETCH_REPO = 'FETCH_REPO';
export const FETCH_COMMITS = 'FETCH_COMMITS';
export const REMOVE_REPO = 'REMOVE_REPO';
export const FETCH_AUTHOR = 'FETCH_AUTHOR';

// action to fetch a repo from github
export function fetchRepo(userAndRepo, all) {
  // const MyQuery = gql`query MyQuery {
  // repository(owner:"facebook", name:"react") {
  //   createdAt,
  //   description
  // }`;
//   const MyQuery = gql`query {
//   user(login:"leftynaut") {
//     createdAt
//   }
// }`;
//   MyQuery.then(a => {
//     console.log(a);
//   });
  const url = `https://api.github.com/repos/${userAndRepo}`;
  const request = axios.get(url);
  // prevents axios from posting search queries on intial load
  if (!all) {
    request
    .then(() => {
      axios.post(`https://github-favorites-backend.herokuapp.com/api/${userAndRepo}`);
    })
    .catch(err => {
      console.log(err);
    });
  }
  return {
    type: FETCH_REPO,
    payload: request
  };
}

// action to fetch a repo from github
export function fetchCommits(userAndRepo) {
  const url = `https://api.github.com/repos/${userAndRepo}/commits`;
  const request = axios.get(url);
  return {
    type: FETCH_COMMITS,
    payload: request
  };
}

// action to remove a repo from user's page
export function removeRepo(index, userAndRepo) {
  const request = index;
  axios.delete(`https://github-favorites-backend.herokuapp.com/api/${userAndRepo}`);
  return {
    type: REMOVE_REPO,
    payload: request
  };
}

// action to fetch a user's info from github
export function fetchAuthor(username) {
  const url = `https://api.github.com/users/${username}`;
  const request = axios.get(url);
  return {
    type: FETCH_AUTHOR,
    payload: request
  };
}
