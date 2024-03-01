/* eslint-disable react/no-unknown-property */
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../features/language/languageSlice";
import './index.scss';
import { useMemo, useState } from "react";

export function ChangeLanguageButton() {
  const [optionsState, setOptionsState] = useState(false);
  const dispatch = useDispatch();

  const currentLangugage = useSelector(state => state.language.currentLanguage);
  const currentTheme = useSelector(state => state.theme.currentTheme);
  function hideOptions() {
    setOptionsState(state => !state)
  }
  const myFlagsUrl = useMemo(() => {
    return {
      'en' : 'https://iconplanet.app/preview/png/64/united-kingdom--3752.png',
      'es' : 'https://iconplanet.app/preview/png/64/spain--3619.png',
      'fr' : 'https://iconplanet.app/preview/png/64/france--3686.png',
      'it' : 'https://iconplanet.app/preview/png/64/italy--3505.png',
      'pr' : 'https://iconplanet.app/preview/png/64/brazil--3747.png',
      'gr' : 'https://iconplanet.app/preview/png/64/germany--3653.png',
    }
  })

  return (
    <div className={`ChangeLanguageButton ${currentTheme}`}>
      <div className="ChangeLanguageButton__Handler" onClick={hideOptions}>
        <img src={myFlagsUrl[currentLangugage]} alt="flag" />
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" fill="none" stroke-width="2" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
          </svg>
        </span>
        </div>
      {optionsState && 
        <div className={`ChangeLanguageButton__LanguagesContainer ${currentTheme}`}>
          <div onClick={() => dispatch(changeLanguage('en'), hideOptions())}> <p>En</p> <img src={myFlagsUrl['en']} alt="flag" /></div>
          <div onClick={() => dispatch(changeLanguage('es'), hideOptions())}> <p>Es</p> <img src={myFlagsUrl['es']} alt="flag" /></div>
          <div onClick={() => dispatch(changeLanguage('fr'), hideOptions())}> <p>Fr</p> <img src={myFlagsUrl['fr']} alt="flag" /></div>
          <div onClick={() => dispatch(changeLanguage('it'), hideOptions())}> <p>It</p> <img src={myFlagsUrl['it']} alt="flag" /></div>
          <div onClick={() => dispatch(changeLanguage('pr'), hideOptions())}> <p>Pr</p> <img src={myFlagsUrl['pr']} alt="flag" /></div>
          <div onClick={() => dispatch(changeLanguage('gr'), hideOptions())}> <p>Pr</p> <img src={myFlagsUrl['gr']} alt="flag" /></div>
        </div>
      }
    </div>
  )
}