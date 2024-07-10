import React from 'react';
import { Form, Button, Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';


const Profile= () => {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
         <MDBContainer className="py-5 h-100">
         <MDBRow className="justify-content-center align-items-center h-100">
         <MDBCol size="12">
    <Container className="mt-4 profile-container">
      <Row>
        <Col md={3}>
          <Nav className="flex-column">
            <h4>Account</h4>
            <p>Kriti Sonava</p>
            <Nav.Link href="#">Overview</Nav.Link>
            <h6>ORDERS</h6>
            <Nav.Link href="#">Orders & Returns</Nav.Link>
            <h6>CREDITS</h6>
            <Nav.Link href="#">Coupons</Nav.Link>
            <Nav.Link href="#">Artisan Credit</Nav.Link>
            <Nav.Link href="#">MynCash</Nav.Link>
            <h6>ACCOUNT</h6>
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#">Saved Cards</Nav.Link>
            <Nav.Link href="#">Saved UPI</Nav.Link>
            <Nav.Link href="#">Addresses</Nav.Link>
            <Nav.Link href="#">Delete Account</Nav.Link>
            <h6>LEGAL</h6>
            <Nav.Link href="#">Terms of Use</Nav.Link>
            <Nav.Link href="#">Privacy Policy</Nav.Link>
          </Nav>
        </Col>
        <Col md={9}>
          <h3>Edit Details</h3>
          <Form>
            <Form.Group controlId="formMobileNumber">
              <Form.Label>Mobile Number*</Form.Label>
              <Row>
                <Col md={10}>
                  <Form.Control type="text" value="6367220384" readOnly />
                </Col>
                <Col md={2}>
                  <Button variant="outline-secondary">CHANGE</Button>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Kriti Sonava" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Male"
                  name="gender"
                  id="genderMale"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  name="gender"
                  id="genderFemale"
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formBirthday">
              <Form.Label>Birthday (dd/mm/yyyy)</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group controlId="formAlternateMobile">
              <Form.Label>Alternate mobile details</Form.Label>
              <Form.Control type="text" placeholder="+91" />
              <Form.Control type="text" placeholder="Mobile Number" className="mt-2" />
              
            </Form.Group>

<br/>
            <Button variant="danger" type="submit" style={{backgroundColor:"#D4B04C"}}>
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
</section>
  );
};

export default Profile;
