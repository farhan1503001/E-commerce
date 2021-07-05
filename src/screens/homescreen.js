import React from 'react'
import {Row,Col} from 'react-bootstrap';
//Now adding products json file
import Product from '../components/Product';
import React, { useState,useEffect } from 'react';
import axios from 'axios';//For connection with api
function Homescreen() {
    //Initializing state
    const [products,setProduct]=useState([])
    return (
        <div>
            <h1>Products List</h1>
            <Row>
                {products.map(product=>(
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3} > 
                           <Product product={product} />
                        </Col>
                    ))
                }
            </Row>

            
        </div>
    )
}

export default Homescreen
