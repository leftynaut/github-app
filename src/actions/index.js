import axios from 'axios';

export const FETCH_REPO = 'FETCH_REPO';

export function fetchRepo(username, repo) {
  const url = `https://api.github.com/repos/${username}/${repo}`;
  const request = axios.get(url);

  return {
    type: FETCH_REPO,
    payload: request
  };
}
