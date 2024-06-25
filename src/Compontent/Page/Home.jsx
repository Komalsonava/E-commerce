import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Col, Container, Nav,  Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Products from '../Modules/Products';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
// import Chikankari from './Chikankari';
// import Wishlist from './Wishlist';
// import { Link } from 'react-router-dom';



const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Term:', searchTerm);
  };
  return (
   <>
    <div className='container' style={{marginTop:"50px"}}>
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100 h-100' 
        alt='First slide'
        src={process.env.PUBLIC_URL + "/images/c1.png"} style={{width: "200", objectFit: "cover"}}
        />
        
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100 h-100-'
        alt='second slide'
        src={process.env.PUBLIC_URL + "/images/c2.png"} 
        />
       
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100 h-100'
        alt='third slide'
        src={process.env.PUBLIC_URL + "/images/c3.png"}
        />
        
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    <div className='container' style={{marginTop:"50px"}}>
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100 h-100' 
        alt='First slide'
        src={process.env.PUBLIC_URL + "/images/c7.png"} style={{width: "200", objectFit: "cover"}}
        />
        
        
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100 h-100-'
        alt='second slide'
        src={process.env.PUBLIC_URL + "/images/c8.png"} 
        />
       
     
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100 h-100'
        alt='third slide'
        src={process.env.PUBLIC_URL + "/images/c9.png"}
        />
        
        
      </Carousel.Item>
    </Carousel>
    </div>

    <Container  style={{marginTop:"50px", }}>
      <Row>
        <Col lg='4' md='12' className='mb-4'>
          <img
            src='/images/c4.png'
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
          />
        </Col>

        <Col lg='4' md='6' className='mb-4'>
          <img
            src='/images/c6.png'
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
          />
        </Col>

        <Col lg='4' md='6' className='mb-4'>
          <img
            src='/images/c5.png'
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
          />
        </Col>
      </Row>
    </Container>
    <br/><br/><br/>

    <div className='container'>
      <div className='row'>
        <div className='text-center'>
          <h2 style={{margin:"center"}}> Shop by Category </h2>
          <br/>
          <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/about">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/about">Library</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"><Link to="/about">Data</Link></li>
                </ol>
          </nav>

          <div className='container' style={{marginTop:"50px"}}>

    <Carousel>
        <Carousel.Item>
            <Row>
            <Col>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c11.png"}
                        alt="Second slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                </Col>
                <Col>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c10.png"}
                        alt="First slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                </Col>
                <Col>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c11.png"}
                        alt="Second slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                </Col>
                <Col>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c15.png"}
                        alt="Sixth slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                </Col>
                <Col>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c12.png"}
                        alt="Third slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                </Col>
            </Row>
        </Carousel.Item>
        <Carousel.Item>
            <Row>
                <Col>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c16.png"}
                        alt="Fourth slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                </Col>
                <Col>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c11.png"}
                        alt="Second slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                </Col>
                <Col>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c14.png"}
                        alt="Fifth slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                </Col>
                <Col>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c15.png"}
                        alt="Sixth slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                </Col>
                <Col>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c14.png"}
                        alt="Fifth slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                </Col>
            </Row>
        </Carousel.Item>
    </Carousel>


           </div>

          </div>
     </div>
  </div>

    
        


<div className='container mt-5 d-flex' style={{marginTop:"50px", justifyContent:"space-between" }}>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/img5.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/img6.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/img7.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/img8.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </div>  
{/* 
    <Chikankari/> */}
  
    {/* <Products/> */}
   
    



    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4'>
              
            <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c16.png"}
                        alt="Fourth slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4'>
             
              <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c16.png"}
                        alt="Fourth slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
           
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4'>
           
              <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c16.png"}
                        alt="Fourth slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto  mb-4'>
              
              <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/images/c16.png"}
                        alt="Fourth slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </section>
       <div> 
       <MDBContainer>
       <MDBRow style={{height:"70px"}}>
      
        <MDBCol size='md'>
          
        <img
                        className="d-block w-70"
                        src={process.env.PUBLIC_URL + "/hand/footer/i.png"}
                        alt="Fourth slide"
                        style={{ height: "50%", objectFit: "cover" }}
                    />    
             
        </MDBCol>
        <MDBCol size='md'>
         
        <img
                        className="d-block w-70"
                        src={process.env.PUBLIC_URL + "/hand/footer/i2.png"}
                        alt="Fourth slide"
                        style={{ height: "50%", objectFit: "cover" }}
                    />
        </MDBCol>
        <MDBCol size='md'>
          
        <img
                        className="d-block w-70"
                        src={process.env.PUBLIC_URL + "/hand/footer/i3.png"}
                        alt="Fourth slide"
                        style={{ height: "50%", objectFit: "cover" }}
                    />
        </MDBCol>
        <MDBCol size='md'>
          
          <img
                          className="d-block w-70"
                          src={process.env.PUBLIC_URL + "/hand/footer/i4.png"}
                          alt="Fourth slide"
                          style={{ height: "50%", objectFit: "cover" }}
                      />
          </MDBCol>
          <MDBCol size='md'>
          
          <img
                          className="d-block w-70"
                          src={process.env.PUBLIC_URL + "/hand/footer/i5.png"}
                          alt="Fourth slide"
                          style={{ height: "50%", objectFit: "cover" }}
                      />
          </MDBCol>
          <MDBCol size='md'>
          
          <img
                          className="d-block w-70"
                          src={process.env.PUBLIC_URL + "/hand/footer/i3.png"}
                          alt="Fourth slide"
                          style={{ height: "50%", objectFit: "cover" }}
                      />
          </MDBCol>
      </MDBRow>
      </MDBContainer>
      <br/>
      <div style={{color:"black", marginLeft:"50px", marginRight:"50px"}} >  
           <hr className='horizontal black mb-4 mt-lg-4 my-4' />
           </div>

       </div>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
           <div>
            <p style={{textAlign:"center"}}><b>BE THE FIRST TO KNOW ABOUT NEW PRODUCTS AND SALES</b></p>
           </div>
           <form onSubmit={handleSearchSubmit} className="search-bar">
              <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}/>
              <button type="submit">Subscribe</button>
           </form>
        </MDBContainer>
      </section>
      
     
      
     
       
      <div className='text-center p-4' style={{ backgroundColor:"#D4B04C", }}>
       
      <Nav className="Navs" style={{display:"flex", marginRight:"30%", fontSize:"large"}}  >
      <Nav.Link className='nav-link'>
            <Link to="/" className='nav-item' >Home</Link>
            </Nav.Link>
            <Nav.Link className='nav-link'>
            <Link to="/about" className='nav-item'>about</Link>
            </Nav.Link>
            <Nav.Link className='nav-link'>
            <Link to="/Contact" className='nav-item'>Contact</Link>
            </Nav.Link>
            <Nav.Link className='nav-link'>
            <Link to="/Singup" className='nav-item'>Singup</Link>
            </Nav.Link>
        </Nav>

    <footer className="footer">
      <div className="footer-section social-media">
      <Link to="/Logiin" className='iconitem'><MDBIcon style={{color:"black"}} fab icon="facebook-f"  /></Link> 
               <Link to='' className='iconitem'><MDBIcon style={{color:"black"}} fab icon="twitter" /></Link>
               <Link to='/Wishlist' className='iconitem'><MDBIcon style={{color:"black"}} fab icon="instagram" /></Link>
               <Link to='/Wishlist' className='iconitem'><MDBIcon color='black' fab icon='google' /></Link>
      </div>
      <div className="footer-section company-name">
        <p style={{fontSize:"medium"}}>© 2024, PHOOL.</p>
      </div>
      <div className="footer-section payment-icons">
      <Link to="/Logiin" className='iconitem'><MDBIcon style={{color:"black"}} fab icon="facebook-f"  /></Link> 
               <Link to='' className='iconitem'><MDBIcon style={{color:"black"}} fab icon="twitter" /></Link>
               <Link to='/Wishlist' className='iconitem'><MDBIcon style={{color:"black"}} fab icon="instagram" /></Link>
      </div>
  </footer>


      
      </div>

    </MDBFooter>
 
   </>
  );
}



export default Home;
