import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  // Get quantity from query string or default to 1
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  // Get cart items from Redux store
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  // Add item to cart if there is a productId and quantity
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  // Remove item from cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  // Redirect to login page when user is not logged in
  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  // Redirect to homepage when cart is empty
  const continueShopping = () => {
    history.push('/')
  }

  return (
    <Row>
      <Col md={8}>
        {cartItems.length === 0 ? (
          // Show message if cart is empty
          <>
            <h1>Your cart is empty</h1>
            <Message>
              Need a few ideas? <Link to='/'>Go to the homepage</Link>
            </Message>
          </>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={3}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {/* Show dropdown of available quantities */}
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4} className='subtotal'>
        {/* Show subtotal and checkout button */}
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Order Summary
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            {
              cartItems.length === 0 ?
                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn-block'
                    onClick={continueShopping}
                  >
                    Continue Shopping
                  </Button>
                </ListGroup.Item>
                :
                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn-block add-to-cart'
                    onClick={checkoutHandler}
                  >
                    Proceed To Checkout
                  </Button>
                </ListGroup.Item>
            }
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen