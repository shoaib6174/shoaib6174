import React, { useEffect } from 'react';
import Navigationbar from '../Navbar/Navigationbar';
import "./AboutMe.css"
import pic_eid_18 from "../Files/Eid_2018.jpg"
import Aos from 'aos'
import "aos/dist/aos.css";
import Stars from '../Stars/Stars';


const AboutMe = () => {
    
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])



    return (
        <div className='aboutMe'>
            <Stars/>
            <div className="about-container" >
                <div className="about-info" data-aos="flip-up">
                    <div>
                    <img id='pic_eid18' src={pic_eid_18} alt=""/>
                    </div>
                    <br/>
                <strong>
                    I am an exceptionally creative and dependable 
                    Front-End Web Developer with superb work
                    ethic. I am broadly and deeply knowledgeable in 
                    a wide variety of computer languages as well as the
                    principles and techniques of website construction and maintenance. 
                    I am enthusiastic about learning new
                    technologies and I can adapt with 
                    new situations very quickly. 
                </strong>
                
                </div>
                <div className="about-img">
                    
                </div>
                
            </div>
           
        </div>
    );
};

export default AboutMe;