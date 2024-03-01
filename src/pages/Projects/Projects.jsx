import { useSelector } from "react-redux";
import './index.scss'
export function Projects() {
  const theme = useSelector(state => state.theme.currentTheme);
  const language = useSelector(state => state.language.languageText);
  return(
    <section className={`Projects ${theme}`}>
      <ProjectCar theme={theme} title="Solar system to scale." description="I made this project using ThreeJs, and react Js." img="https://bootstrapmade.com/demo/templates/MyResume/assets/img/profile-img.jpg"/>
      <ProjectCar theme={theme} title="Store" description="I made this project using ThreeJs, and react Js." img="https://bootstrapmade.com/demo/templates/MyResume/assets/img/profile-img.jpg"/>
      <ProjectCar theme={theme} title="Path finder" description="I made this project using ThreeJs, and react Js." img="https://bootstrapmade.com/demo/templates/MyResume/assets/img/profile-img.jpg"/>
    </section>
  )
}


function ProjectCar({title, description, img, theme}){
  return(
    <div className={`Projects__card ${theme}`}>
      <img src={img} alt="my img" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )

}