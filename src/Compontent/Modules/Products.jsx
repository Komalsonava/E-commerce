import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

const Products = () => {
    const items = [
    // const [items, setItems] = useState([])
        // const deletedata=(id)=>{
        //     fetch("http://localhost:4001/Category/_id")
        //     .then((res) =>res.json())
        //     .then((data) => setItems(data))
            
        // },
        {
            id: 1,
            Product_name: "p1",
            price: 900,
            image: "/hand/chikankari/ck1.png",
        },
        {
            id: 2,
            Product_name: "p2",
            price: 900,
            image: "/hand/chikankari/ck1.png",
        },
        {
            id: 3,
            Product_name: "p3",
            price: 900,
            image: "/hand/chikankari/ck1.png",
        },
        {
            id: 4,
            Product_name: "p4",
            price: 900,
            image: "/hand/chikankari/ck1.png",
        },
        {
            id: 5,
            Product_name: "p5",
            price: 900,
            image: "/hand/chikankari/ck1.png",
        },
        {
            id: 6,
            Product_name: "p6",
            price: 900,
            image: "/hand/chikankari/ck1.png",
        },
    ]
    
    // useEffect(() => {
    //     fetch("http://localhost:4001/Category")
    //     .then((res) =>res.json())
    //     .then((data) => setItems(data))
    //     .catch((error) => console.log(error));
    // }, []);

    // const handleDelete = (id) => {
    //     fetch(`http://localhost:4001/Category`, {
    //         method:"delete",
    //     })
        // .then((res) =>res.json())
        // .then((data) => {
        //     setReload(!reload);
        //     console.log(data);
        // })
    // }

  return (
    
    <Container>
    <Row>
      {items.map((elem) => (
        <Col key={elem.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
          <Card>
            <div className='bg-image hover-zoom' >
            <Card.Img variant="top" src={process.env.PUBLIC_URL + elem.image} />
            </div>
            <Card.Body>
              <Card.Title>{elem.Product_name}</Card.Title>
              <Card.Text>${elem.price}</Card.Text>
              <Link to="/Productdetail" className="btn mx-4" variant="primary">Buy Now</Link>
              <Link to="/ShoppingCart" className="btn mx-4" variant="primary">Add to Cart</Link>
              <Link to="/wishlist" className="btn mx-4"><MDBIcon className="me mdn-icon" icon="heart" size="lg" /></Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
    
    // <div>
    //     <table border={1} align='center' cellSpacing={0} cellPadding={10}>
    //         <tr>
    //             <th>title</th>
    //             <th>description</th>
    //             <th>image</th>
    //             <th>Delete</th>
    //         </tr>
    //         {items.map((item)=>(
    //             <tr key={item._id}>
    //                 <td>{item.title}</td>
    //                 <td>{item.description}</td>
    //                 <td>
    //                     <img src={item.thumbnail} alt="" height={100}/>
    //                 </td>
    //                 <td> <button onClick={()=>deletedata(item.id)}>Delete</button></td>
    //             </tr>
    //         ))}
    //     </table>
    // </div>
  )
}

export default Products