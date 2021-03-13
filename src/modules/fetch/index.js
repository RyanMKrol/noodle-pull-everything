import fetch from 'node-fetch';

/**
 * method to fetch repositories for a given user
 *
 * @param {string} username the user to fetch data for
 * @returns {Promise<JSON>} repositories for a user
 */
async function fetchRepos(username) {
  return fetch(`https://api.github.com/users/${username}/repos`).then((res) => res.json());
}

export default fetchRepos;
