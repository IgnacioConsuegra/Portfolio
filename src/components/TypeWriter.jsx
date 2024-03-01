/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from "react";

export function TypeWriter({text, velocity, initTime, repeat, className}) {
  const [displayText, setDisplayText] = useState('');

  const currentInterval = useRef();
  const firsTimeOut = useRef();
  const intervalTimeOut = useRef();

  function titleHandling(){
    const frases = text;
    let manejadorFrases = 0;
  
    const crear = () => {
      let indice = 1;
      currentInterval.current = setInterval(() => 
      {
        let texto = frases[manejadorFrases].substring(0, indice);
        setDisplayText(texto.concat("|"));
        indice++;
        if(indice - 1 === frases[manejadorFrases].length){
          intervalTimeOut.current = setTimeout(() => {
            clearInterval(currentInterval.current);
            destruir();
          }, 0.5 * 1000)
        }
      }, velocity * 1000)
    }
    crear();
  
    const destruir = () => {
      let indice = frases[manejadorFrases].length;
  
      currentInterval.current = setInterval(() => {
        let texto = frases[manejadorFrases].substring(0, indice);
        setDisplayText(texto.concat("|"));
        indice--;
        if(manejadorFrases === frases.length - 1 && !repeat){
          clearInterval(currentInterval.current);
          setDisplayText(displayText => displayText.substring(0, displayText.length - 1));
          displayStyle.current = true;
          return;
        } 
        
        if(indice === 1){
          intervalTimeOut.current = setTimeout(() => {
            manejadorFrases < frases.length - 1 ? manejadorFrases++ : manejadorFrases = 0;
            clearInterval(currentInterval.current);
            crear();
          }, 0.5 * 1000)
        }
      }, velocity * 1000)
    }
  }

  useEffect(() => {
    clearInterval(currentInterval.current);
    clearInterval(firsTimeOut.current);
    clearInterval(intervalTimeOut.current);
    setDisplayText('');

    firsTimeOut.current = setTimeout(() => {
      titleHandling();
    }, initTime * 1000);

    return () => {
      clearInterval(currentInterval.current);
      clearInterval(firsTimeOut.current);
      clearInterval(intervalTimeOut.current);
      setDisplayText('');
    }
  }, [text])

  return(
    <span> {displayText}</span>
  )

}

TypeWriter.propTypes = {
  text: PropTypes.array,
  velocity: PropTypes.number,
  initTime: PropTypes.number,
  repeat: PropTypes.bool,
  className: PropTypes.string,
}