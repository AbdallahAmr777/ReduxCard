import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/Slices/Cart-slice";

const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = carts.reduce((acc, cart) => {
    acc += cart.price *cart.quantity;
    return acc;
  }, 0);
  return (
    <Container>
      <h1 className="py-5">Welcome To Cart</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr key={cart.id}>
              <td>{cart.id}</td>
              <td>{cart.title}</td>
              <td>
                <img
                  src={cart.image}
                  alt={cart.title}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{cart.price}$</td>
              <td>{cart.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteFromCart(cart))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5>Total Price : {totalPrice.toFixed(2)}$</h5>

      <Button variant="success" onClick={() => dispatch(clear())}>
        Clear Cart
      </Button>
    </Container>
  );
};

export default Cart;
