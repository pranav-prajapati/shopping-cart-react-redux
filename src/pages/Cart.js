import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SingleCard from "../components/SingleCard";
import _ from "lodash";

function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <div className="row mt-3">
      {!_.isEmpty(cartProducts) && <h2>Cart Products</h2>}
      {!_.isEmpty(cartProducts) ? (
        _.map(cartProducts, (elem) => (
          <SingleCard
            image={elem.image}
            name={elem.title}
            price={elem.price}
            key={elem.id}
            product={elem}
          />
        ))
      ) : (
        <h4 className="mt-3" style={{ color: "#800000", fontWeight: "bold" }}>
          Your Cart is Empty!
        </h4>
      )}
    </div>
  );
}

export default Cart;
