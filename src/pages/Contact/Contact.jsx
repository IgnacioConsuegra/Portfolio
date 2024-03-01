import { useSelector } from 'react-redux';

import './index.scss'
import emailjs from '@emailjs/browser'


export function Contact() {
  const theme = useSelector(state => state.theme.currentTheme);
  const language = useSelector(state => state.language.languageText);
  return (
    <section className={`Contact ${theme}`}>
      <MyForm theme={theme} />
    </section>
  )
}

function MyForm({theme}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    alert('sending')
    emailjs.sendForm('service_prc8s6j', 'template_hru0toj', e.target, 'c35l9lDghdLtJzEkl');

  }
  return (
    <form onSubmit={handleSubmit} className={`form ${theme}`}>
      <div className="title">Send me an email</div>
      <div className="input-container ic2">
        <input name='email_from' id='emailFrom' className="input" type="text" placeholder=" "/>
        <div className="cut cut-short"></div>
        <label htmlFor="emailFrom" className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <input name="message" id="message" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="message" className="placeholder">Message</label>
      </div>
      <button type="send" className="submit">Submit</button>
    </form>
  )
}