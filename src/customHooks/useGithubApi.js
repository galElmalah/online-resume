import axios from 'axios';
import { useState, useEffect } from 'react';

const toHRF = repo => ({name:repo.name,link:repo['html_url'], startGazersUrl: repo['stargazers_url'], 
language: repo.language,
description:repo.description

})

const givePriority = {
  'ctf':true,
  'hackernoon-scraper':true,
  'react-declarative-fetch':true,
  'simple-actions-dispatcher':true,
  "react-use-temp-records":true,
  "galElmalah.github.io":true,
  "Blog": true,
  "react-map-context-to-props":true
}
export const useGithubApi = (username) => {
  const [fetching, setFetching] = useState(true);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const endpoint = `https://api.github.com/users/${username}/repos`;
    axios.get(endpoint).then(({data}) => {
      setRepos(data.filter(r => !r.fork).map(toHRF).sort((a, b) => 
        givePriority[b.name] ? 1 : -1)
        );
    }).catch(console.error).finally(() => setFetching(false))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {fetching, repos}
}