
import { Card } from 'react-bootstrap'

const SingleBook = ({handleSelected,book,selected}) => {

    return (
      <>
        <Card
          onClick={() => handleSelected(book.asin)}
          style={{
            border:
              selected === book.asin
                ? '3px solid red'
                : 'none',
          }}
        >
          <Card.Img variant='top' src={book.img} className='imageBook'/>
          <Card.Body>
            <Card.Title className="text-truncate" style={{ color: 'black' }}>
              {book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  
}

export default SingleBook
