import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Essay from './essay'

 class Dashboard extends React.Component {
  render() {
    return (
      <Container>
      <Row>
 
      <Col xs="3">
      <Container>
      <Row>
      <Col>
      dashboard
      </Col>
      <Col>
      <Essay/>
      </Col>
      </Row>
      </Container>
      </Col>
      </Row>
      </Container>
      );
    }
  }
  export default Dashboard