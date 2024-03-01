import { TypeWriter } from "../TypeWriter";
import '../../stylesheets/Home/Presentation.css'
import { useEffect, useState } from "react";

export function Presentation() {
  return(
    <div className="presentation">
        <TypeWriter text={["Ignacio Consuegra", "React Developer"]} velocity={0.09} initTime={1} repeat={false} className="react"/>
        <TypeWriter text={["HTML"]} velocity={0.3} initTime={7} repeat={false} className="html"/>
        <TypeWriter text={["CSS"]} velocity={0.4} initTime={9} repeat={false} className="css"/>
        <TypeWriter text={["JavaScript"]} velocity={0.2} initTime={11} repeat={false} className="javascript"/>
    </div>
  )
}