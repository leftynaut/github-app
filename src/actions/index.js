// import axios from 'axios';

export const FETCH_REPO = 'FETCH_REPO';
export const FETCH_COMMITS = 'FETCH_COMMITS';
export const REMOVE_REPO = 'REMOVE_REPO';
export const FETCH_AUTHOR = 'FETCH_AUTHOR';

// action to fetch a repo from github
export function fetchRepo(userAndRepo) { // (userAndRepo, all)
  // NOTE: temporarily removing backend connection while implementing apollo
  // const url = `https://api.github.com/repos/${userAndRepo}`;
  // const request = axios.get(url);
  // prevents axios from posting search queries on intial load
  // if (!all) {
  //   request
  //   .then(() => {
  //     axios.post(`https://github-favorites-backend.herokuapp.com/api/${userAndRepo}`);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }
  const request = userAndRepo;
  return {
    type: FETCH_REPO,
    payload: request
  };
}

// action to fetch a repo from github
export function fetchCommits(userAndRepo) {
  // const url = `https://api.github.com/repos/${userAndRepo}/commits`;
  // const request = axios.get(url);
  const request = userAndRepo;
  return {
    type: FETCH_COMMITS,
    payload: request
  };
}

// action to remove a repo from user's page
export function removeRepo(index) { // (index, userAndRepo)
  // NOTE: temporarily removing backend connection while implementing apollo
  const request = index;
  // axios.delete(`https://github-favorites-backend.herokuapp.com/api/${userAndRepo}`);
  return {
    type: REMOVE_REPO,
    payload: request
  };
}

// action to fetch a user's info from github
export function fetchAuthor(username) {
  // const url = `https://api.github.com/users/${username}`;
  // const request = axios.get(url);
  const request = username;
  return {
    type: FETCH_AUTHOR,
    payload: request
  };
}
