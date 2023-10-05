import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataProfile from './DataProfile';
import Profile from './Profile';


const ContaiinerProfile = () => {
  return (
    <div>
      <Container>  {/* The main container */}
      <Row>        {/* Row for displaying profiles */}
        {/* Mapping through the DataProfile array */}
       {DataProfile.map(({name,imgsrc,bio,profession}) => 
        <Col xs>
     {/* Displaying a single profile */}
         <Profile
           name={name}
           imgsrc={imgsrc}
           bio={bio}
           profession={profession} />
        </Col>
        )}
       </Row>
      </Container>
    </div>
  )
}

export default ContaiinerProfile
