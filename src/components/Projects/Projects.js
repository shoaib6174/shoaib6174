import React,{useEffect} from 'react';
import CardOne from '../CardOne/CardOne';
import { Container, Row, Col } from 'react-bootstrap';
import Navigationbar from '../Navbar/Navigationbar';
import Stars from '../Stars/Stars';
import redOnion from '../Files/redOnion.png';
import doctor from "../Files/doctors_portal.png"
import ema from '../Files/ema.jpg';
import Aos from 'aos'
import "aos/dist/aos.css";

const projects = [{
    title: "Doctor's Portal" ,
    description: ["Doctors can manage the appointments and add prescriptions." ,  " Patients can book appointments and check prescription"],
    technology: "React.js, Node.js, Material-UI, MongoDB, Express JS, Heroku, firebase",
    img: ""+doctor,
    sitelink: "https://doctors-portal-11abf.web.app/"
},{
    title: "Red Onion Restaurant" ,
    description: "Customer can select food items to order. Login needed to proceed with order. Customers can check out by paying through payment credit card.",
    technology: "React.js, Stripe.js MongoDB, Node.js, CSS, Heroku, firebase",
    img: ""+redOnion,
    sitelink: "https://red-onion-simple.firebaseapp.com/"
},{
    title: "Ema-John-Simple" ,
    description: "An eCommerce website to sell products online. Login needed to checkout.  Payment through credit card.",
    technology: "React.js, Stripe.js MongoDB, Node.js, CSS, Heroku, firebase",
    img: ""+ema,
    sitelink: "https://ema-john-simple-6174.netlify.app/"
}]

const Projects = () => {

    useEffect(() => {
        Aos.init({ duration: 8000 });
    }, [])



    return (
        <div id="projects" data-aos="flip-left" className='projects-container' >
            
            <Container>
                <Row>
                {projects.map(p=>{
                    return <div data-aos="fade-up" className="col-xs-12  col-md-4"><CardOne title={p.title} technology={p.technology} description={p.description} img = {p.img}  sitelink={p.sitelink} /> </div> 
                    })
                }   
                </Row>
            </Container>
            
           
        </div>
    );
};

export default Projects;