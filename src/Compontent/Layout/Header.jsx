import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from 'react-router-bootstrap';
import { MDBIcon } from "mdbreact"; 
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody,  MDBBtn,MDBModal,  MDBModalDialog, MDBCardImage,} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";


export const Header = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);


  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (

    //   <div>
    //     <div className="flexx" style={{display:"flex", justifyContent:"normal"}}>

    //       <div className='truck'>
    //          <MDBIcon style={{marginTop:"9px", color:"dimgray"}} fas icon="truck-moving" />
    //       </div>

    //            <p style={{padding:"inherit", margin:"6px", fontSize:"small"}}>FREE SHIPPING IN INDIA</p>






    //        <Nav className='icon' style={{justifyContent:"space-between",marginTop:"6px", marginLeft:"75%", fontSize:"small"}}>
    //              <Link to="/Logiin" className='iconitem'><MDBIcon style={{color:"dimgray"}} fab icon="facebook-f"  /></Link> 
    //              <Link to='' className='iconitem'><MDBIcon style={{color:"dimgray"}} fab icon="twitter" /></Link>
    //              <Link to='/Wishlist' className='iconitem'><MDBIcon style={{color:"dimgray"}} fab icon="instagram" /></Link>
    //    </Nav>
    //    </div>


    //   <Navbar expand="lg" className="Navbar" style={{backgroundColor:"beige"}}>
    //     <Container>
    //       <Navbar.Brand href="#home" style={{fontSize:"x-large"}}> <b>Shopper</b></Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="Nav"  >
    //           <Nav.Link className='nav-link'>
    //           <Link to="/" className='nav-item'>Home</Link>
    //           </Nav.Link>
    //           <Nav.Link className='nav-link'>
    //           <Link to="/about" className='nav-item'>about</Link>
    //           </Nav.Link>
    //           <Nav.Link className='nav-link'>
    //           <Link to="/Contact" className='nav-item'>Contact</Link>
    //           </Nav.Link>
    //           <Nav.Link className='nav-link'>
    //           <Link to="/Singup" className='nav-item'>Singup</Link>
    //           </Nav.Link>


    //           {<NavDropdown title="Product" id="basic-nav-dropdown">
    //             <NavDropdown.Item href="#action/3.1">Men's</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.2">Women's</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.3">Kid's</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action/3.4">
    //               Separated link
    //             </NavDropdown.Item>
    //           </NavDropdown> }

    //         </Nav>
    //         <Nav className='icon' style={{justifyContent:"space-between",marginLeft:"35%"}}>
    //         <Link to="/Logiin" className='nav-item'><MDBIcon  far icon="user" /></Link> 
    //         <Link to='' className='icon-item'><MDBIcon  fas icon="search" /></Link>
    //         <Link to='/Wishlist' className='icon-item'><MDBIcon  far icon="heart" /></Link>
    //         <Link to='' className='icon-item'><MDBIcon  fas icon="shopping-cart" /></Link>

    //       </Nav>


    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    //   <Navbar>

    //   </Navbar>
    //   <div className="flex">
    //     <p style={{padding:"inherit", margin:"6px"}}> ⚡️ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡️</p>

    // </div>
    // </div>
    <>
      <div className="navbar-top">
        <div className="marquee">
          <div className="marquee-content">
            <p>NOW LIVE | Get Free Cotton Tote Bag On Order Above ₹ 2100 | Free Shipping On All Orders Above ₹ 350</p>
          </div>
        </div>
      </div>

      <div className="navbar-middle">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">➔</button>
        </div>

        <div className="logo-container">
          <h1 className="logo">PHOOL</h1>
          <p className="tagline">MADE FROM TEMPLE FLOWERS</p>
        </div>

        <div>
          <Nav className="ml-auto">
            <LinkContainer to="/wishlist">
              <Nav.Link>
                <MDBIcon className="me mdn-icon" icon="heart" size="lg" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/logiin">
              <Nav.Link>
                <MDBIcon className="me-2 mdb-icon" icon="user" size="lg" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Profile">
              <Nav.Link>
                <MDBIcon className="me-2 mdb-icon" icon="sign-in-alt" size="lg" />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </div>
      </div>



      <Navbar expand="lg" className="custom-navbar" variant="light">
        <Container className="justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  <b>Home</b>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>
                  <b>About</b>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Products">
                <Nav.Link>
                  <b>ALL products</b>
                </Nav.Link>
              </LinkContainer>

              <div
                to="/"
                className="nav-links"
                onClick={toggleDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Nav.Link>
                  <b>Category</b>
                </Nav.Link>
              </div>
              {
                showDropdown && (
                  <div className="navbar-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleDropdown}>
                    <div className="dropdown-section">
                      <h4>Sarees</h4>
                      <ul>
                        <LinkContainer to="/chikankari">
                          <Nav.Link>
                            <li>Chikankari</li>
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/madhubani">
                          <Nav.Link>
                            <li>Madhubani</li>
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/ajrakh">
                          <Nav.Link>
                            <li>Ajrakh</li>
                          </Nav.Link>
                        </LinkContainer>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>Religious items</h4>
                      <ul>
                        <LinkContainer to="/Sticks">
                          <Nav.Link>
                            <li>Incense Sticks</li>
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/madhubani">
                          <Nav.Link>
                            <li>Essential Oil </li>
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/ajrakh">
                          <Nav.Link>
                            <li>Incense cones</li>
                          </Nav.Link>
                        </LinkContainer>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <LinkContainer to="/ajrakh">
                        <Nav.Link>
                          <h4>Home and living</h4>

                        </Nav.Link>
                      </LinkContainer>
                    </div>
                    <div className="dropdown-section">
                      <LinkContainer to="/ajrakh">
                        <Nav.Link>
                          <h4>Bags</h4>
                        </Nav.Link>
                      </LinkContainer>
                    </div>
                    <div className="dropdown-section">
                      <LinkContainer to="/ajrakh">
                        <Nav.Link>
                          <h4>Toys</h4>
                        </Nav.Link>
                      </LinkContainer>
                    </div>
                    <div className="dropdown-images">
                      <div className="image-card">
                        <img
                          className="d-block w-100"
                          src={process.env.PUBLIC_URL + "/hand/chikankari/ck3.png"}
                          alt="Fourth slide"
                        />
                        <p>New Arrivals</p>
                        <a href="/new-arrivals">Shop now</a>
                      </div>
                      <div className="image-card">
                        <img
                          className="d-block w-100"
                          src={process.env.PUBLIC_URL + "/hand/chikankari/ck6.png"}
                          alt="Fourth slide"
                        />
                        <p>Basic Tees</p>
                        <a href="/basic-tees">Shop now</a>
                      </div>
                    </div>
                  </div>
                )}
            </Nav>
            <Nav className="ms-auto">

              <Nav.Link>
                <MDBIcon onClick={() => setOpen(!open)} className="me-2 mdb-icon" icon="user" size="lg" style={{ color: "#D4B04C" }} />

                <MDBModal open={open} setOpen={setOpen} tabIndex={-1}>
                  <MDBModalDialog  position='top-right' >
                   
                    <div className="vh-100 " style={{ backgroundColor: '#eee' }}>
                      <MDBContainer>
                        <MDBRow className="justify-content-center">
                          <MDBCol md="9" lg="9" xl="9" className="mt-5">
                            <MDBCard style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
                              <MDBCardBody className="p-4 text-black">

                                <div className="d-flex align-items-center mb-4">
                                  <div className="flex-shrink-0">
                                    <MDBCardImage
                                      style={{ width: '70px' }}
                                      className="img-fluid rounded-circle border border-dark border-3"
                                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp'
                                      alt='Generic placeholder image'
                                      fluid />
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <div className="d-flex flex-row align-items-center mb-2">
                                      <p className="mb-0 me-2">Kriti Sonava</p>

                                    </div>
                                    <div>
                                    <Link to="/PlaceOrder">
                                      <MDBBtn outline color="dark" rounded size="sm" className="mx-1">See profile</MDBBtn></Link>

                                    </div>
                                  </div>
                                </div>
                                <hr />

                                <MDBBtn color="success" rounded block size="lg">
                                  LOGOUT
                                </MDBBtn>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>
                        </MDBRow>
                      </MDBContainer>
                    </div>
                 
                  </MDBModalDialog>
                </MDBModal>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>


  );
}

export default Header;




