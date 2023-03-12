import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './TourDetails.css'
const dataBase = require("../../data/db.json")

function TourDetails(){ 
    
    const { id } = useParams();
    const information = dataBase.filter((item)=> item.id === id);
    let cityCard = information[0];

    const [seeMore, setSeeMore] = useState(false);

    const clickSeeMore = () =>{
        setSeeMore(!seeMore);
    }

    return (
        <div className="a">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cityCard.image}  style={{ width: '25rem' }} />
            <Card.Body>
              <Card.Title  style={{ width: '30rem' }} >{cityCard.name}</Card.Title>
              <Card.Text>
                {seeMore ? cityCard.info : `${cityCard.info.substring(0, 100)}...`}
                <Card.Text> {cityCard.price}</Card.Text>
              </Card.Text>
              <Button onClick={clickSeeMore}>
                {seeMore ? "See less" : "See more"}
              </Button>
            </Card.Body>
          </Card>
        </div>
      )
}
export default TourDetails;
    