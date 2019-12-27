import React from 'react';
import { useGithubApi } from '../../customHooks/useGithubApi';

export const GithubContext = React.createContext({});

export const GithubProvider = ({children}) => {
  const {repos, fetching} = useGithubApi('galelmalah')

  return <GithubContext.Provider value={{repos, fetching}}>
    {children}
  </GithubContext.Provider>
}