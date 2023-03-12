import { useState } from 'react';
import './Tour.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

const dataBase = require('../../../data/db.json');

function Tour(props) {
    return (
        <div className='tour'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.tour.image} style={{ width: '18rem' }} />
                <Card.Body>
                    <Card.Title>{props.tour.name}</Card.Title>

                    <Link to={`/city/${props.tour.id}`}>  {/* the "id" was taken from the dataBase  */}
                        <Button variant="primary">more information</Button>

                    </Link>
                </Card.Body>
            </Card>

        </div>

    );
}

export default Tour;