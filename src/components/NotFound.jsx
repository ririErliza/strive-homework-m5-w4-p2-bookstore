import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () =>{

    return(
    <Container>
    <Row className="justify-content-center">
      <Col className="text-center">
        <h1>404 </h1>
        <p>Sorry cannot find what you look for</p>
      </Col>
    </Row>
  </Container>
  )
}

export default NotFound