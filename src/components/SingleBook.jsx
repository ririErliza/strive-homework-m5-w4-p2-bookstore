
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingleBook = ({handleSelected,book,selected}) => {

  const navigate=useNavigate()

    return (
      <>
        <Card
         
          style={{
            border:
              selected === book.asin
                ? '3px solid red'
                : 'none',
          }}
        >
          <Card.Img variant='top' src={book.img} className='imageBook'  onClick={() => handleSelected(book.asin)}/>
          <Card.Body>
            <Card.Title className="text-truncate" style={{ color: 'black' }}>
              {book.title}
             
            </Card.Title>
          
            <Button onClick={() => navigate('/bookdetails/'+book.asin)}>see details</Button>
          
          </Card.Body>
        </Card>
      </>
    )
  
}

export default SingleBook
