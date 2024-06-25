import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBTextArea
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <Container>
    <div className='cont mt-5 d-flex'  style={{backgroundColor:"darkslategray", marginTop:"50px" }}>
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>


          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
               We are the genesis of the 'flowercycling' technology. Through our innovation, we offer you products made from temple flowers. Tell us how you like our products or how we could improve them or leave us a compliment.
          <br/> <br/>
          <b>Work hours : </b>Monday to Saturday, 10:00 AM to 7:00 PM
          <br/> <br/>
          <b>Customer Care : </b>hello@phool.co or call at<br/>
          +91-7408584112 (also on Whatsapp)
          <br/> <br/>
          For Partnerships or replicating our model please read the Partnership FAQs.
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <MDBInput wrapperClass='mb-4' label='Phone number' id='form4' type='Phone number'/>
              <MDBTextArea wrapperClass='mb-4' label='message' id='form5' type='message'/>
             

              <MDBBtn className='w-100 mb-4' size='md' style={{backgroundColor:"goldenrod"}}>Submit</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
    </Container>
    </>
  );
}

export default App;

