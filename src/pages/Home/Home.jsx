import { TypeWriter } from "../../components/TypeWriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

import { useSelector} from 'react-redux';
import { useEffect } from 'react';
import './index.scss';

export function Home() {
  const theme = useSelector(state => state.theme.currentTheme);
  const language = useSelector(state => state.language.languageText);
  useEffect(() => {
  }, [language])
  return(
    <main className={`homePage ${theme}`}>
      <div className={`homePage__mainHolder ${theme}`}>
        <h1>Ignacio Consuegra</h1>
        <p> {language.HomePage.Person}  
          { language ? 
            <TypeWriter text={language.HomePage.Array} language={language} velocity={0.09} initTime={1} repeat={true} className={`homePage__mainHolder__writer`}/>
            : 
            null
          }
        </p>
        <div className="homePage__mainHolder__contactInfo">
          <div><a href="https://github.com/IgnacioConsuegra" target="__blank"><FontAwesomeIcon icon={faGithub} color="black"/></a></div>
          <div><a href="https://www.linkedin.com/in/ignacio-consuegra-b8a9691b1/" target="__blank"><FontAwesomeIcon icon={faLinkedin} color="black"/></a></div>
          <div><a href="https://wa.link/e81op0" target="__blank"><FontAwesomeIcon icon={faWhatsapp} color="black"/></a></div>
        </div>
      </div>
    </main>
  )
}