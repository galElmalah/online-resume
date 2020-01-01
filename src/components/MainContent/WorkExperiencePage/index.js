import * as React from 'react';
import * as style from './WorkExperiencePage.module.scss';

const jobs = [{
  from: '11.7.2019',
  to: 'Now',
  company: {
    name: 'Wix.com',
    website: ''
  },
  jobTitle: 'Student software developer',
  description: 'i worked on a variei worked on a variety of front end and back end projecs \n lallallai worked on a variety of front end and back end projecs \n lallallai worked on a variety of front end and back end projecs \n lallallaty of front end and back end projecs \n lallallaai worked on a variety of front end and back end projecs \n lallallai worked on a variety of front end and back end projecs \n lallallai worked on a variety of front end and back end projecs \n lallalla'
},
{
  from: '11.7.2019',
  to: 'Now',
  company: {
    name: 'Wix.com',
    website: ''
  },
  jobTitle: 'Student software developer',
  description: 'i worked on a variety of front end and back end projecs \n lallallaa'
},
{
  from: '11.7.2019',
  to: 'Now',
  company: {
    name: 'Wix.com',
    website: ''
  },
  jobTitle: 'Student software developer',
  description: 'i worked on a variety of front end and back end projecs \n lallallaa'
},
{
  from: '11.7.2019',
  to: 'Now',
  company: {
    name: 'Wix.com',
    website: ''
  },
  jobTitle: 'Student software developer',
  description: 'i worked on a variety of front end and back end projecs \n lallallaa'
}]

export const WorkExperiencePage = () => {
  return (
    <div className={style.WorkExperiencePageContainer}>
      <h1>Work Experience</h1>
      {jobs.map((job, i) => (
        <section key={i}className={style.jobCard}>
          <div className={style.description}>
            <p>{job.description}</p>
          </div>
          <div className={style.details}>
            <h3>{job.jobTitle}</h3>
            <p>{`${job.from} - ${job.to}`} </p>
            <p>{`at - ${job.company.name}`} </p>
          </div>
        </section>))}
    </div>
  );
};
