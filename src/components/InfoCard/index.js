import * as React from 'react';
import * as style from './InfoCard.module.scss';

export const InfoCard = () => {
  return <div className={style.infoCardContainer}>
    <figure>
      <img src="gal.jpg" alt="me"/>
    </figure>
  </div>;
};
