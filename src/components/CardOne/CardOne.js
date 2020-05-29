import React from 'react';
import { Card,Button } from 'react-bootstrap';
import './CardOne.css'

const CardOne = (props) => {
    console.log(props)
    return (
        <div > 
            <div className='cardone'>
                <Card.Img id="card-img" variant="top" src={props.img}></Card.Img>
                <Card.Body>
                <Card.Title>
                    <h4>
                    {props.title}
                    </h4>   
                </Card.Title>
                <Card.Text>
                <strong>Features: </strong> {props.description}
                </Card.Text>
                <Card.Text>
                    <strong>Technologies:</strong> {props.technology}
                </Card.Text>
                <Button  variant="info">
                       <a href={props.sitelink} target="_blank"> Visit The Website</a>
                </Button>
                </Card.Body>
            </div>
        </div>
    );
};

export default CardOne;