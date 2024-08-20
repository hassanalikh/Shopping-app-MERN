import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Button, ListGroup, Image, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);



    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`http://localhost:8080/products/${id}`);
            setProduct(data);
        }
        fetchProduct();
    }, [id]);

    return (
        <div>
            <Link to='/' className='btn btn-light'>
                <i className="fa-solid fa-arrow-left"></i> &nbsp;Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h2>
                                <i>{product.name} </i>
                            </h2>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h5>
                                Category: {product.category}
                            </h5>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroupItem>
                        <ListGroupItem>
                            <h4> {product.price} $</h4>
                        </ListGroupItem>
                        <ListGroupItem>
                            <p> {product.description}</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroupItem>
                            <Row>
                                <Col>Status : </Col>
                                <Col>
                                    {product.countInStock ? "In stock" : "Out of stock"}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className='btn btn-block' type='button'> Add to Cart</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetails