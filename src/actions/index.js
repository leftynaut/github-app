import axios from 'axios';

export const FETCH_REPO = 'FETCH_REPO';
export const REMOVE_REPO = 'REMOVE_REPO';
export const FETCH_AUTHOR = 'FETCH_AUTHOR';

// action to fetch a repo from github
export function fetchRepo(userAndRepo) {
  const url1 = `https://api.github.com/repos/${userAndRepo}/commits`;
  const request1 = axios.get(url1);
  request1.then(answer => {
    const commits = {
      c1: answer.data[0],
      c2: answer.data[1],
      c3: answer.data[2]
    };
    const config = {transformResponse: [function(data) {
      data.commits = commits;
    }]};
    const url2 = `https://api.github.com/repos/${userAndRepo}`;
    const request2 = axios.get(url2);
    return {
      type: FETCH_REPO,
      payload: request2
    };
  });
}

// action to remove a repo from user's page
export function removeRepo(index) {
  const request = index;

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
