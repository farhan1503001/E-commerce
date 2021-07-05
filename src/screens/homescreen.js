import React from 'react'
import {Row,Col} from 'react-bootstrap';
import { useEffect,useState } from 'react';
//Now adding products json file
import axios from 'axios'
import Product from '../components/Product';
function Homescreen() {
    //Initializing use state
    const [products,setProducts]=useState([])
    //Starting useeffec to trigger when successful api call is made
    useEffect(()=>{
        //console.log('Triggered')
        //axios will call api then what will happen?
        //so asnyc function has to be declared
        //CRC control has to be established in backend
        async function fetch_data(){
            const {data}= await axios.get('http://localhost:8000/products/')
            setProducts(data)
        }
        fetch_data()
    },[])
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
