import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating'
function ProductScrean({ product }) {
    return (
        <>
            <Card className="my-3 p-3 rounded">
                <Link to={`/products/${product._id}`}>
                    <Card.Img src={product.image} variant='top'></Card.Img>
                </Link>
                <Card.Body>
                    <Link to={`/products/${product._id}`}>
                        <Card.Title as="div">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>

                    <Card.Text as="div">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </Card.Text>
                    <Card.Text as="div">
                        $ {product.price}
                    </Card.Text>



                </Card.Body>
            </Card>

        </>
    )
}

export default ProductScrean