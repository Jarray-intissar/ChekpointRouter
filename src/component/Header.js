import React from 'react'
import { Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';


function Header({settext,setrate}) {
  return (
    <div>
        <>
      <Navbar bg="black"  variant="dark" >
  <Container fluid>
    <Navbar.Brand>
        <img
          alt=""
          src="https://archive.org/download/movies-design-power-name/Movies-design-power-name.gif"
          width="200"
          height="100"
        />{' '}
      
      </Navbar.Brand>
      
   
    <Nav
        className="me-auto my-2 my-lg-0"
      >
        <Nav.Link > <Link to="/"style={{textDecoration:"none", color:"white",fontWeight:"400",fontSize:"20px"}}>Home</Link></Nav.Link>
        <Nav.Link ><Link to="/about"style={{textDecoration:"none", color:"white",fontWeight:"400",fontSize:"20px"}}>About</Link></Nav.Link>
        <Nav.Link ><Link to="/contact"style={{textDecoration:"none", color:"white",fontWeight:"400",fontSize:"20px"}}>Contact</Link></Nav.Link>
      </Nav>
      <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                style={{ width: '60%',height:"30%"}}
                aria-label="Search" onChange={(e) => settext(e.target.value)}
              />
                <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    onChange={(newRating)=>setrate(newRating)}
   
  />,
     
            </Form>
      
        
  </Container>
</Navbar>
      

</>
    </div>
  )
}

export default Header 