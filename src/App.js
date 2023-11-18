
import './App.css';
import Introduction from './Components/Introduction.jsx';
import Tech from './Components/Tech.jsx';
import Projects from './Components/Projects.jsx';
import EmailIMG from './Components/Images/email.png';
import Contact from './Components/Contact.jsx';
import {useState} from 'react';
import Resume from './Components/Docs/TimothyHoytBSME-2023.pdf';
import ResIMG from './Components/Images/resume.png';
import MessIMG from './Components/Images/message.png';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="app">
      <div onClick={()=>{setShowForm(true)}} className="name noselect">
        <h1>TIMOTHY HOYT</h1>
      </div>
      <main className="info">
        <header className='contact-options'>
          <button onClick={()=>{setShowForm(true)}} className='contact-option contact'>
            <img src={MessIMG} alt='Message' title='Message' className='contact-icon messimg' />
            Contact
          </button>
          <a href={Resume} className='contact-option ' target="_blank" rel="noopener noreferrer">
            <img src={ResIMG} alt='Resume' title='Resume' className='contact-icon resimg' />
            Resume
          </a>
          <a href='mailto: timothyhoytbsme@gmail.com' className='contact-option'>
            <img src={EmailIMG} alt='Email' title='Email' className='contact-icon emailimg' />
            Email
          </a>
        </header>
        {showForm? <Contact setShowForm={setShowForm}></Contact> : <></>}
        <Introduction></Introduction>
        <Tech></Tech>
        <br></br>
        <br></br>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
