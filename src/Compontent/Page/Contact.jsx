import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { Box } from '@mui/material';



function Contact() {
  return (
        <>
          <div className="mx-auto gradient-custom mt-5" style={{ maxWidth: '800px', height: '400px' }}>
            <MDBRow className="pt-3 mx-3">
              <MDBCol md="3">
                <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
                  <MDBIcon fas icon="shipping-fast text-white" size="3x" />
                  <MDBTypography tag="h3" className="text-white">Welcome</MDBTypography>
                  <p className="white-text">You are 30 seconds away from compleating your order!</p>
                </div>
               
              </MDBCol>
              <MDBCol md="9" className="justify-content-center">
                <MDBCard className="card-custom pb-4">
                  <MDBCardBody className="mt-0 mx-5">
                    <div className="text-center mb-3 pb-2 mt-3">
                      <MDBTypography tag="h4" style={{ color: '#495057' }} >Contact Details</MDBTypography>
                    </div>
    
                    <form className="form mb-0">
                      <MDBRow className="mb-4">
                        <MDBCol>
                          <MDBInput label='First name' type='text' />
                        </MDBCol>
                        <MDBCol>
                          <MDBInput label='Last name' type='text' />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="mb-4">
                        <MDBCol>
                          <MDBInput label='City' type='text' />
                        </MDBCol>
                        <MDBCol>
                          <MDBInput label='Zip' type='text' />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="mb-4">
                        <MDBCol>
                          <MDBInput label='Address' type='text' />
                        </MDBCol>
                        <MDBCol>
                          <MDBInput label='Email' type='text' />
                        </MDBCol>
                      </MDBRow>
    
                      <div className="float-end">
                        <MDBBtn rounded style={{backgroundColor: 'transparent', color:"black"}}>SEND</MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                  
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
         <iframe width="80%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
         src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Computer%20Science%20Department%20and%20MCA%20BCA%20department+(Artisan)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="Location Map"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
         
         </Box>
        </>
     
  );
}

export default Contact;