import { Navbar, Nav, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavbar = (props) => (
  <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
     <Navbar.Brand>StriveBooks</Navbar.Brand>
    <Link to = "/">
          <div className='mr-3'>Home</div>
        </Link>
    <Link to = "/Login">
          <div>Login</div>
        </Link>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='align-items-center ml-auto'>
        <Form.Control
          
          type='text'
          placeholder='Search here'
          value={props.searchQuery}
          onChange={(e) => props.handleSearchQuery(e.target.value)}
        />
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default MyNavbar
