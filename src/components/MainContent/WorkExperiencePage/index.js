import * as React from 'react';
import * as style from './WorkExperiencePage.module.scss';
import { ThemeContext } from '../../ThemeProvider/index';
import classnames from 'classnames'
import { jobs } from './jobs'

export const WorkExperiencePage = () => {
  const [isNightMode] = React.useContext(ThemeContext)

  return (
    <div className={style.WorkExperiencePageContainer}>
      <h1>Work Experience</h1>
      {jobs.map((job, i) => (
        <section key={i}className={classnames({ [style.jobCard]: true, [style.night]: isNightMode })}>
          <div className={style.description}>
            <p>{job.description}</p>
          </div>
          <div className={style.details}>
            <h3>{job.jobTitle}</h3>
            <p>{`${job.from} - ${job.to}`} </p>
            <p>{`@${job.company.name}`} </p>
          </div>
          <img src={`./${job.logo || 'logo192.png'}`}/>
        </section>))}
    </div>
  );
};
