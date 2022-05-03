import { Col, Container, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import historyBooks from '../historyBooks.json'
import CommentList from './CommentList'

const BookDetails = () =>{


const params = useParams()
console.log("params", params)

const [book, setBook]=useState(null)

const [comments, setComments] = useState([])

useEffect( () => {

    let rightBookToShow = historyBooks.find (
        (book) => book.asin.toString() === params.asin
    )
    console.log("Book found?", rightBookToShow)

    if(rightBookToShow){
        setBook(rightBookToShow)
        getComments(rightBookToShow.asin)
    }else{
        Navigate('/')
    }

// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

const getComments = async (asin) => {
  try {
    let response = await fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + asin,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyZmRkYWRhMTNhZjAwMTUyYzFjNjEiLCJpYXQiOjE2NTA5Njk0OTAsImV4cCI6MTY1MjE3OTA5MH0.QrRgqLmGfP5kD0uhi_9E5zlAZBtJ3dziXGlXENqvi2k',
        },
      }
    )
    if (response.ok) {
      let bookComments = await response.json()
      setComments(bookComments)
    } else {
      console.log('error fetching the comments')
    }
  } catch (error) {
    console.log(error)
  }
}


    return(
    <Container>
    <Row className="justify-content-center mt-5">
      <Col className="text-center" md={6}>
          {book && (
              <div>
                  <h2>{book.title} </h2>
                <img src={book.img} style={{ height: '500px' }} alt="book-pic" />
                
                <p>price: {book.price}</p>
                <p>category: {book.category}</p>
                <p>asin: {book.asin}</p>
              </div>
            

          )}
        
      </Col>
      <Col className="text-center" md={6}>
          
              <div>
               
                <p>Comment section</p>
                <CommentList commentsToShow={comments} />
              </div>
            

         
        
      </Col>
    </Row>
  </Container>
  )
}

export default BookDetails

// const getComment =async()=>{
    //     try {
    //       let response = await fetch(
    //         'https://striveschool-api.herokuapp.com/api/comments/' +
    //           asin,
    //         {
    //           headers: {
    //             Authorization:
    //               'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyZmRkYWRhMTNhZjAwMTUyYzFjNjEiLCJpYXQiOjE2NTA5Njk0OTAsImV4cCI6MTY1MjE3OTA5MH0.QrRgqLmGfP5kD0uhi_9E5zlAZBtJ3dziXGlXENqvi2k',
    //           },
    //         }
    //       )
    //       console.log(response)
    //       if (response.ok) {
    //         let comments = await response.json()
       
    //       
    
    //       } else {
    //         console.log('error')
            
    //       }
    //     } 
    //     catch (error) {
    //       console.log(error)
          
    //   }