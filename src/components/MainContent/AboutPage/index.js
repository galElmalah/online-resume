import * as React from 'react';
import * as style from './AboutPage.module.scss';

export const AboutPage = () => {
  return (
    <div className={style.aboutMeContainer}>
      <h1>About Me</h1>

      <h2>My picture here</h2>

      <p>
        Hey there{' '}
        <span role='img' aria-label='hey'>
          👋🏻
        </span>
        , my name is <mark>Gal Elmalah</mark> and I am currently in my fourth
        year of studying software engineering in the start-up capital of the
        world, Israel.
      </p>
      <p>
        Im a full stack developer at <mark>Wix.com</mark> where I work on many
        different projects while keeping im mind <mark>scalability</mark>,{' '}
        <mark>performance </mark> and great <mark>UX</mark> all while using the
        latest technologies around.
      </p>
      <p>
        I am passionate about all things relating to web development, from using
        the latest technologies, to implementing coding ‘best practices’ and
        user experience optimisation, to design and develop cutting edge
        webapps.
      </p>
      <p>
        When I’m not using my kung Fu coding skills to save the universe, you
        can find me riding my mountain bikes{' '}
        <span role='img' aria-label='mountain biker'>
          🚵🏼‍♂️
        </span>
        , running{' '}
        <span role='img' aria-label='runner'>
          🏃🏼‍♂️{' '}
        </span>
        or just enjoying a good book
        <span role='img' aria-label='books'>
          {' '}
          📚
        </span>
        .
      </p>
    </div>
  );
};
