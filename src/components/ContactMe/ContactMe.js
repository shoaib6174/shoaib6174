import React, {useEffect} from 'react';
import Form from '../Form/Form';
import './ContactMe.css'
import Navigationbar from '../Navbar/Navigationbar';
import Aos from 'aos'
import "aos/dist/aos.css";

const ContactMe = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])



    return (
        <div id="contact" className='contact-container'>
            
            
            <div className="contactForm d-flex justify-items-center" data-aos="zoom-in-up">
                <Form/>
            </div>
        </div>
    );
};

export default ContactMe;