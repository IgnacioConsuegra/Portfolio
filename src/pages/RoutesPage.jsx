import { Routes, Route } from "react-router-dom";
import { NotFound } from "./NotFound/NotFound";
import { Home } from "./Home/Home";
import {About} from './About/About';
import {Projects} from './Projects/Projects';
import {Contact} from './Contact/Contact'
import {NavBar} from '../components/NavBar/NavBar';

export function RoutesPage(){
  

  return(
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={ <Home/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/projects" element={ <Projects/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/*" element={ <NotFound/> }/>
      </Route>
    </Routes>
  )
}