import React from "react";
import {

  MDBCol,
  MDBContainer,
 
  MDBIcon,
 
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
} from "mdb-react-ui-kit";


export default function SummaryPage() {
  return (
    <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Whislist
                  </th>
                  <th scope="col">Type</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="/hand/chikankari/ck13.png"
                        fluid
                        className="rounded-3"
                        style={{ width: "120px" }}
                        alt="Book"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">Thinking, Fast and Slow</p>
                        <p className="mb-0">Daniel Kahneman</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      Sarees
                    </p>
                  </td>
                 
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      $9.99
                    </p>
                  </td>
                  <td className="align-middle">
                   
                  <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2 btn btn-warning"
                    title="Remove item"  >
                    <MDBIcon fas icon="trash" />
                  </MDBTooltip>

                   </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="/hand/toys/t13.png"
                        fluid
                        className="rounded-3"
                        style={{ width: "120px" }}
                        alt="Book"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">
                          Homo Deus: A Brief History of Tomorrow
                        </p>
                        <p className="mb-0">Yuval Noah Harari</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                       Toys
                    </p>
                  </td>
               
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      $13.50
                    </p>
                  </td>
                  <td className="align-middle">
                    <div class="d-flex flex-row align-items-center">
                     
                    <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2 btn btn-warning"
                    title="Remove item"  >
                    <MDBIcon fas icon="trash"  />
                  </MDBTooltip>
                    </div>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
         
        </MDBRow>
      </MDBContainer>
    </section>
  );
}