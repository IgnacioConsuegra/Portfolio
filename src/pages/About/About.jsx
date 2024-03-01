import { useSelector } from "react-redux";
import { ChangeLanguageButton } from "../../components/changeLenguageButton/ChangeLanguageButton";
import './index.scss'

export function About() {
  const theme = useSelector(state => state.theme.currentTheme);
  const language = useSelector(state => state.language.languageText);
  return(
    <section className={`aboutPage ${theme}`}>
      <div className={`aboutPage__Info ${theme}`}>
        <h1>About</h1>
        <p>
          ¡Hola! Soy Ignacio Consuegra.
          Soy entusiasta del <b>desarrollo web</b> con un enfoque especial en <b>React</b>. Mi pasión por la creación de aplicaciones web comenzó en 2021, cuando decidí adentrarme en el mundo del desarrollo como autodidacta.
          Si bien mi viaje como desarrollador está en sus primeras etapas, estoy emocionado por las oportunidades que el futuro tiene reservadas. Estoy abierto a colaboraciones, aprendizaje continuo y nuevos desafíos que me ayuden a crecer tanto personal como profesionalmente.
        </p>
      </div>
      <div className={`aboutPage__data ${theme}`}>
        <img src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/profile-img.jpg" alt="TypicalImage"/>
        <div className="aboutPage__data__extraInfo">
          <PieceOfData className="aboutPage__pieceOfData" left="Full Name" right="Ignacio Consuegra"/>
          <PieceOfData className="aboutPage__pieceOfData" left="Birthday" right="12/09/2004/"/>
          <PieceOfData className="aboutPage__pieceOfData" left="Phone" right="(+57) 302 3182127"/>
          <PieceOfData className="aboutPage__pieceOfData" left="Email" right="ignacioandresconsuegradelacruz@gmail.com"/>
        </div>
      </div>
    </section>
  )
}


function PieceOfData({className, left, right}) { 
  return(
    <div className={className}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" fill="none" stroke-width="2" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
        </svg>
      </span>
      <p><b>{left}: </b>{right}</p>
    </div>
  )
}