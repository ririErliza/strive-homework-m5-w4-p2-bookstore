import {useState} from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

const BookList =({searchQuery,books})=>{

const[selected, setSelected]=useState('')


const handleSelected = (asin) => {
    setSelected(asin)
  }

 
    return (
      <Container>
        <Row className="mt-3">
          <Col md={8}>
            <Row className="overflowThis" >
              {books
                .filter((b) =>
                  b.title.toLowerCase().includes(searchQuery)
                )
                .map((b) => (
                  <Col xs={4} key={b.asin} className="mb-3">
                    <SingleBook
                      book={b}
                      selected={selected}
                      handleSelected={handleSelected}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea asin={selected} />
          </Col>
        </Row>
      </Container>
    )
  
}

export default BookList
