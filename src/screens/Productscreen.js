import React from 'react'
import products from '../products'
import {Card,ListGroup,Button,Image,Row,Col} from 'react-bootstrap';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
function Productscreen({match}) {
    const Product=products.find((p)=>p._id===match.params.id)
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                   <Image src={Product.image} alt={Product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{Product.name}</h3>
                            <Rating value={Product.rating} text={`${Product.numReviews} reviews`} color={'#f8e825'}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Price: ${Product.price} </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {Product.description}
                        </ListGroup.Item>
                    </ListGroup>

                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                            <Row>
                                <Col>Price</Col>
                                <Col>
                                <strong>${Product.price}</strong>
                                </Col>
                            </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Row>
                                <Col>Status</Col>
                                <Col>
                                <strong>{Product.countInStock>0 ? 'In Stock' : 'Out of Stock'}</strong>
                                </Col>
                            </Row>
                            </ListGroup.Item>
                          
                            
                             <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={Product.countInStock===0}>Add to Cart</Button>

                            </ListGroup.Item>


                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Productscreen
