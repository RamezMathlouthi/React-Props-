import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
  //Composant profil qui reçoit les props de name,image,profesion et bio

const Profile = (props) => {
  const name=props.name;
  const imgsrc=props.imgsrc;
  const profession=props.profession;
  const bio=props.bio;
  
   
  return (
    <>
    {/* Carte Bootstrap pour afficher le profil */}
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title> {/* Nom du personne */}
        <Card.Text>{bio} </Card.Text>  {/* bio du personne */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        
        <ListGroup.Item>{profession}</ListGroup.Item> {/* profession du personne */}
        
      </ListGroup>
      
    </Card>
    </>
  )
}

export default Profile
