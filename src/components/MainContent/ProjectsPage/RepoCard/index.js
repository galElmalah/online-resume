/* eslint-disable react/prop-types */
import * as React from 'react'
import * as style from './RepoCard.module.scss'
import axios from 'axios'

const mapper = (lang) => {
  const map = {
    'c++': 'cpp'
  }

  return map[lang] || lang
}

export const RepoCard = ({ name, link, language, startGazersUrl, description }) => {
  const [stars, setStars] = React.useState(0)
  const handleClick = () => {
    window.open(link, '_blank')
  }
  React.useEffect(() => {
    axios.get(startGazersUrl).then(({ data }) => setStars(data.length)).catch(console.error)
  }, [startGazersUrl])

  return <div className={style.card} onClick={handleClick}>
    <div className={style.titleContainer}>
      <h2>{name}</h2>
      <div className={style.metaContainer}>
        <span className={`${style.label} ${style[mapper(language.toLowerCase())]}`}>{language}</span>
        {!!stars && <span className={style.stars}>stars: {stars}</span>}
      </div>

    </div>
    {description && <p>{description}</p>}
  </div>
}
