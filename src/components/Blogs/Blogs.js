import React ,{useEffect}from 'react';
import CardOne from '../CardOne/CardOne';
import { Container, Row, Col } from 'react-bootstrap';
import Navigationbar from '../Navbar/Navigationbar';
import book from '../Files/book_cover2.jpg'
import js from '../Files/javascript_logo.png'
import {Button } from 'react-bootstrap';
import './Blogs.css'
import Aos from 'aos'
import "aos/dist/aos.css";


const Blogs = () => {
    const blogs = [{
        title: "doctor's portal" ,
        description: "website for appointment management",
        img: "https://i.imgur.com/gMiPZkf.jpg",
        sitelink: "https://www.google.com"
    }]

    useEffect(() => {
        Aos.init({ duration: 100000 });
    }, [])



    return (
        <div id="blog" data-aos="flip-right" className='blogs-container'>
            <div> 
                <h3>Books:</h3> <br/> <br/>
                <div data-aos="fade-up" className="book-card cardone">
                    <div className="card-img-top">
                    <img id="book_img" src={book} alt=""/>
                    </div>
                    <div className="card-body">
                        <div className="card-title">
                        <h5>
                                Title: গণিতের মজার প্রশ্ন ও উত্তর
                            </h5>
                        </div>
                        <div className="card-text">
                            Publisher: অধ্যয়ন <br/>
                            <Button variant="danger"><a target="_blank" href="https://www.rokomari.com/book/156334/goniter-mojar-proshno-o-uttor">Buy Now</a></Button>
                        </div>
                    </div>
            </div>
            <br/><br/>
            <h3>Blogs:</h3> <br/> <br/> <br/>
            <div className='container blog-links'>
            <div className="row">
                
                    <div data-aos="fade-up" className="book-card blog-card cardone">
                        <div className="card-img-top">
                        <img id="book_img" src={js} alt=""/>
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                            <h5>
                                    Title: JS interview questions
                                </h5>
                            </div>
                            <div className="card-text">
                                Some basic common JavaScript interview questions 
                                <br/>
                                <Button variant="danger"><a target="_blank" href="https://medium.com/@shoaib6174/js-interview-questions-cb9fc2b3faa0">Read Now</a></Button>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="book-card blog-card cardone">
                        <div className="card-img-top">
                        <img id="book_img" src={js} alt=""/>
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                            <h5>
                                    Title: HTML and CSS interview Questions
                                </h5>
                            </div>
                            <div className="card-text">
                                Some interesting HTML and CSS interview questions 
                                <br/>
                                <Button variant="danger"><a target="_blank" href="https://medium.com/@shoaib6174/html-css-1088f5df4974">Read Now</a></Button>
                            </div>
                        </div>
                    </div>



                    <div data-aos="fade-up" className="book-card blog-card cardone">
                        <div className="card-img-top">
                        <img id="book_img" src={js} alt=""/>
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                            <h5>
                                    Title: Algorithms in short using JavaScript
                                </h5>
                            </div>
                            <div className="card-text">
                                 A quick description of common algorithms using JavaScript 
                                <br/>
                                <Button variant="danger"><a target="_blank" href="https://medium.com/@shoaib6174/algorithms-in-short-using-javascript-c7221edf6d80">Read Now</a></Button>
                            </div>
                        </div>
                    </div>


            </div>
            
            </div>
            <div className="button-container">
                <Button variant="info">
                        <a target="_blank" href="https://medium.com/me/stories/public">
                        Show All... </a>
                </Button>
            </div>
                
                
                
            </div>
             
        </div>
    );
};

export default Blogs;