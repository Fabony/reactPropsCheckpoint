
import React from "react";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ name, team, nationality, jerseyNumber, age, ImageUrl }) => {
  return (
    <Card style={{ width: "75rem", margin: "10px" }}>
      <Card.Img variant="top" src={ImageUrl} />
      <Card.Body>
        <Card.Title>Name:{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
         <Card.Text> Age: {age}</Card.Text>
         <Card.Text>Nationality: {nationality}</Card.Text>
         <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
