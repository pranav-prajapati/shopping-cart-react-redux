import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add, remove} from "../store/cart.slice";
import { useLocation } from "react-router-dom";

function SingleCard({ image, name, price, product }) {
  const dispatch = useDispatch();
  const pathName = useLocation();

  const addToCart = (product) => {
    dispatch(add(product));
  }

  const removeFromCart = (productId)=>{
    dispatch(remove(productId));
  }

  return (
    <div className="col-md-4 mt-3" style={{ marginBottom: "15px" }}>
      <Card style={{ width: "18rem" }} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={image}
            style={{ height: "130px", width: "100px", marginTop: "10px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>INR : {price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {pathName.pathname === "/cart" ? (
            <Button
              variant="danger"
              onClick={() => {
                removeFromCart(product.id);
              }}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to Cart
            </Button>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default SingleCard;
