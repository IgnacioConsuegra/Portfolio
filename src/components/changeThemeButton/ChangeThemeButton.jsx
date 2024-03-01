
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../features/theme/themeSlice";
import './index.scss'
import {  faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function ChangeThemeButton(){
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.currentTheme);
  return(
    <div className={`changeButton ${theme}`} onClick={() => dispatch(changeTheme())}>
      {
        theme === 'dark' ? 
        (<FontAwesomeIcon icon={faSun} />)
        :
        (<FontAwesomeIcon icon={faMoon} />)
      }
    </div>
  )
}