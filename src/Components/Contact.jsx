import {useState} from 'react';
import emailjs from "@emailjs/browser";
import Message from "./Message";

function Contact({setShowForm}) {
    const [showMessage, setShowMessage] = useState(false);
    const [sendResultMessage, setSendResultMessage] = useState("Error on our end");
    const templateid = 'template_9b8clme';
    const emailjsid = 'service_if3fvmi';
    const pubkey = 'Dlc3f_twaAte1mUWb';

    const checkKeyDown = (e) => {
        if (e.code === 'Enter') e.preventDefault();
    };

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(emailjsid,templateid,e.target,pubkey)
            .then((result)=>{
                setSendResultMessage("Message Sent!");
                setShowMessage(true);
            }, (error)=>{
                setSendResultMessage(error.text);
                setShowMessage(true);
            });
        e.target.reset();
    }

  return (
    <div className='contactform'>        
        <form className='contactform-form' onSubmit={sendEmail} onKeyDown={(e) => checkKeyDown(e)}>
            <input className="contactform-name" type="text" placeholder='Name' name='from_name' required></input>
            <input className="contactform-email" type="email" placeholder='Email' name='reply_to' required></input>
            <textarea className="contactform-message" id='' cols='30' rows='7' placeholder='Message' name='message' required></textarea>
            <Message message={sendResultMessage} timeout={2000} showMessage={showMessage} setShowMessage={setShowMessage}></Message>
            <button className='contactform-button' type='submit' >Send Message</button>
            <button onClick={()=>{setShowForm(false)}} className='contactform-button'>Close</button>
        </form>
    </div>
  )
}

export default Contact