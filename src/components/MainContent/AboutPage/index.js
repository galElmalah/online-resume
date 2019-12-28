import * as React from 'react'
import * as style from './AboutPage.module.scss'

export const AboutPage = () => {
  return <div className={style.aboutMeContainer}>
    <h1>About Me</h1>

    <img src="gal.jpg" alt="me"/>
    <p><b>need to find a better pic</b></p>
    <p>This is my new online resume, which i think does a much better job in showcasing my skills </p>
    <p>
    My name is Gal and I am currently in my fourth year of studying software engineering in the start-up capital of the world, Israel.
    </p>
    <p>
    Full stack dev at Wix.com, some more info about the projects i do there and did.<br/>
    Dev center, apps integrations.<br/>
    Wix docs, internal platform for creating documentations<br/>
    all while using the latest techs around
    </p>
    <p>
I am passionate about all things relating to web development, from using the latest technologies, to implementing coding ‘best practices’ and user experience optimisation, to design and develop cutting edge webapps.
    </p>
    <p>
When I’m not using my kung Fu coding skills to save the universe, you can find me riding my mountain bikes, running or just enjoying a good book.</p>
  </div>
}
