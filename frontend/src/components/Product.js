import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`} style={{ width: '100%' }}>
                <Card.Body style={{ width: '100%', height: 225 }} className="d-flex align-items-center justify-content-center">
                    <Card.Img className="mx-3 py-4" src={product.image} variant='top' style={{ maxWidth: '60%', height: 'auto' }} />
                </Card.Body>
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Product