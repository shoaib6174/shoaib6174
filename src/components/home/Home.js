import React from 'react';


import './Home.css'
import Navigationbar from '../Navbar/Navigationbar';
import { rollIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Typical from 'react-typical';
import cv from '../Files/cv1.pdf'

const styles = {
  rollIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rollIn, 'rollIn')
  }
}
const Home = () => {

  

    return (
        
          
          <div className="home">
            <Navigationbar/>
              <StyleRoot>
                <div className="test intro" style={styles.rollIn}>
                      <div className="info">
                           
                            <h1 className="font-weight-bolder text-dark">Shoiab</h1> <br/> <br/>
                            <h6 >
                             
                                <Typical
                                steps={['Web Developer', 2500, 'Author', 2000, 'Programmer', 2000]}
                                loop={Infinity}
                                wrapper="b"
                                />
                            </h6> <br/><br/>
                            <a href={cv} download="CV(Shoaib)"><button className="button">Get CV</button></a>

                      </div>
                </div>
            </StyleRoot>
        </div>
        
          
           
    );
};

export default Home;