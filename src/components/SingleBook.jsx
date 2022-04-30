
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleBook = ({handleSelected,book,selected}) => {

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
            <Link to={'/bookdetails/'+book.asin}>
            <Button>see details</Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    )
  
}

export default SingleBook
