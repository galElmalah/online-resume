import * as React from 'react'
import * as style from './ProjectsPage.module.scss'
import { GithubContext } from '../../GithubProvider/index'
import { RepoCard } from './RepoCard/index'

export const ProjectsPage = () => {
  const { repos, fetching } = React.useContext(GithubContext)
  console.log(fetching)
  return <div className={style.projectPageContainer}>
    <h1>Projects</h1>
    {repos.map(repo => {
      return (<RepoCard key={repo.name} {...repo}/>)
    })}
  </div>
}
