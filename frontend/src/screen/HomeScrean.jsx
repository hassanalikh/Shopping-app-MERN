import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import axios from 'axios';

import ProductScrean from './ProductScrean';

function HomeScrean() {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);



    return (
        <>
            <Row>
                {
                    products.map(product => (
                        <Col key={product._id} md={3}><ProductScrean product={product} /></Col>
                    ))
                }
            </Row>

        </>
    )
}

export default HomeScrean