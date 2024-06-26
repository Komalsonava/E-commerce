import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import Contact from './Contact';
import { useAuth } from '../../context/AuthContext';
import FacebookAuth from 'react-facebook-auth';
// const App = () => { 
//   const navigate=useNavigate();
//   const [formData, setFormdata] = useState({
//     title: "",
//     description: "",
//     thumbnail: "",
//   });
const Login = () => {
  // const {setIsAuthenticate } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    email:"",
    password:"",
  })
  const handleChange = (ev) => {
    const {name, value} =ev.target;
     setFormdata({
      ...formData,
      [name]: value,
    });
    };
  // const handlthumbnail = (ev) => {
  //   if (ev.target.files) {
  //     setFormdata({
  //       ...formData,
  //       thumbnail: ev.target.files[0],
  //       });
  //   }
  // };

 

  // const handleInputChange = (ev) => {
  //   const {name, value} =ev.target;
  //    setFormdata({
  //     ...formData,
  //     [name]: value,
  //   });
  //   };

  // const onFormsubmit = (ev) =>{
  //   debugger;
  //   ev.preventDefault();
  //   console.log(formData);
  //   if (formData.email && formData.password)
  //     {
  //       // const form = new FormData();
  //       // form.append("title", formData.title);
  //       // form.append("description", formData.description);
  //       // form.append("thumbnail", formData.thumbnail);

  //       fetch("http://localhost:4001/login", {
  //         method: "POST",
  //         body: JSON.stringify(formData),
  //         headers:{
  //           "content-type" :"Application/json",
  //         }
  //       })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.user){
  //           console.log(data);
  //         navigate("/Wishlist");
  //       }else{
  //         alert(data.error)}
  //       })
  //       .catch((error) => 
  //         console.log(error));

  //     }
      
  // }
 const authenticate = () => {
  console.log(Response);
 }
 const MyFacebookButton = ({ onClick }) =>{
  return(
  <MDBIcon onClick={onClick} fab icon='facebook-f' size="lg"/>
  )
 }

  return (
    <>
     <MDBContainer fluid>
     <form>
     <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
           <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

             <h2 className="fw-bold mb-2 text-uppercase" >Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' onChange={(ev) => handleChange(ev)} labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100'  onChange={(ev) => handleChange(ev)} labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
             <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                 Login
             </MDBBtn>
             <FacebookAuth
                appId="505500775147832"
                callback={authenticate}
                 component={MyFacebookButton}
               />
    <br/>

            <div className='d-flex flex-row mt-3 mb-5'>
              <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                   <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                 <MDBIcon fab icon='twitter' size="lg"/>
                 </MDBBtn>

               <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                 <MDBIcon fab icon='google' size="lg"/>
                 </MDBBtn>
              </div>

             <div>
                 <p className="mb-0">Don't have an account? <Link to="#!" class="text-white-50 fw-bold">Sign Up</Link></p>

              </div>
             </MDBCardBody>
           </MDBCard>

         </MDBCol>
       </MDBRow>
</form>
     </MDBContainer>
{/* 
    <div className='cat-form'>
      <form onSubmit={onformsubmit}>
        <div>
          <label>title</label>
          <input type='text' name='title' onChange={handleInputChange} />
        </div>
        <div>
          <label>description</label>
          <input type='text' name='description'onChange={handleInputChange} />
        </div>
        <div>
        <label>thumbnail</label>
        <input type='file' name='thumbnail'onChange={handlthumbnail} />
        </div>
        <div>
          <input type='submit' value="save"/>
        </div>
      </form>
    </div> */}
    <div>
      <Contact/>
   </div>
       </>
  );
}

export default Login;
