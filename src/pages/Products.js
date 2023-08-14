import React, { useEffect } from "react";
import _ from "lodash";
import SingleCard from "../components/SingleCard";
import { useDispatch } from "react-redux";
import { getProductsAsync } from "../store/product.slice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import LoaderComponent from "../components/LoaderComponent";
import { status } from "../utils/constants";

function Products() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  return (
    <>
      <div className="row">
        {productStatus !== status.FAILED && (
          <h2 className="mt-3">Product Dashboard</h2>
        )}

        {productStatus === status.LOADING ? (
          <LoaderComponent />
        ) : (
          _.map(products, (elem) => (
            <SingleCard
              image={elem.image}
              name={elem.title}
              price={elem.price}
              key={elem.id}
              product={elem}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Products;
