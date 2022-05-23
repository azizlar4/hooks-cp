import React from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({Players}) => {
  return (
    <div>
      <Card style={{width: "18rem"  }}>
        <Card.Img variant="top" src={Players.image_url} />
        <Card.Body>
          <Card.Title>Name : {Players.name}</Card.Title>
          <Card.Text>Age : {Players.age}</Card.Text>
          <Card.Text>position : {Players.position}</Card.Text>
          <Card.Text>rate : {Players.rate}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlayerCard;
