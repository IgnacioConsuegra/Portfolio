import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet,  useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCode, faContactCard, faMailBulk, } from '@fortawesome/free-solid-svg-icons';
import { ChangeThemeButton } from '../changeThemeButton/ChangeThemeButton'
import { ChangeLanguageButton } from "../changeLenguageButton/ChangeLanguageButton";
import { useSelector } from "react-redux";

import './NavBar.scss';


export function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const language = useSelector(state => state.language.languageText);

  useEffect(() => {
    const handleResize = () => {
      console.log("Beein executed.", window.innerWidth)
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigate = useNavigate();
  const myPages = useRef(0);
  const myLinks = ["/", "/about", "/projects", "/contact"];
  const wheelControl = useRef(0);

  function handleWheel(event) {
    if(event.deltaY > 0) { //down
      if(myPages.current < myLinks.length - 1 && wheelControl.current >= 3){
        wheelControl.current = 0;
        myPages.current = myPages.current  + 1;
        navigate(myLinks[myPages.current]);
        return;
      }
      if(wheelControl.current < 3 ) { 
        wheelControl.current = wheelControl.current + 1;
        return;
      }
    } else if (event.deltaY < 0 ){ //up
      if(myPages.current > 0 && wheelControl.current <= -3){
        wheelControl.current = 0;
        myPages.current = myPages.current  - 1;
        navigate(myLinks[myPages.current]);
        return;
      }
      if(wheelControl.current > - 3 ) { 
        wheelControl.current = wheelControl.current - 1;
        return;
      }
    }
  }
  function handleShowNav() {
    setShowNav(prev => !prev);
  }

  return(
    <>
      {
        windowWidth < 1024 && 
        <>
          {!showNav ? (
            <div className={`NavBar__Hamburger ${!showNav ? 'appear' : 'disappear'}`} onClick={handleShowNav}>
              <div className="NavBar__Hamburger__line"></div>
              <div className="NavBar__Hamburger__line"></div>
              <div className="NavBar__Hamburger__line"></div>
            </div>
          ) : (
            <>
              <div className={ `NavCloseButton ${!showNav ? 'appear' : 'disappear' }` } onClick={handleShowNav}>X</div>
            </>
          ) }
        </>
      }
      <NavBarOptions language={language} className={windowWidth < 1024 ? (`NavBar__Header ${showNav ? 'appear' : 'disappear'}`) : (`NavBar__Header computerWidth`)} handleWheel={handleWheel}/>
      <Outlet/>
    </>
  )
}



function NavBarOptions({handleWheel, className, language}) {
  const theme = useSelector(state => state.theme.currentTheme);
  return(
    <header className={`${className} ${theme}`} >
      <nav onWheel={handleWheel}>
        <ul>
          <li><NavLink className={({isActive}) => ( isActive ? 'navActive' : 'navNormal')} to="/"><FontAwesomeIcon icon={faHouse} /><p>{language.NavBar.Home}</p></NavLink></li>
          <li><NavLink className={({isActive}) => ( isActive ? 'navActive' : 'navNormal')} to="/about"><FontAwesomeIcon icon={faContactCard} /><p>{language.NavBar.About}</p></NavLink></li>
          <li><NavLink className={({isActive}) => ( isActive ? 'navActive' : 'navNormal')} to="/projects"><FontAwesomeIcon icon={faCode} /><p>{language.NavBar.Projects}</p></NavLink></li>
          <li><NavLink className={({isActive}) => ( isActive ? 'navActive' : 'navNormal')} to="/contact"><FontAwesomeIcon icon={faMailBulk} /><p>{language.NavBar.Contact}</p></NavLink></li>
        </ul>
        <div className={`${className} optionsContainer`}>
          <ChangeThemeButton/>
          <ChangeLanguageButton/>
        </div>
      </nav>
    </header>
  )
}