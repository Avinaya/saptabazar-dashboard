import React from "react";
import "./Product.scss";
import AddIcon from "@material-ui/icons/Add";
import ProductFilter from "./ProductFilter/ProductFilter";
import Orders from './../../component/dashboard/Orders';

function Products() {
  return (
    <section className="product_wrapper">
      <div className="product_wrapper_header">
        <div className="product_wrapper_header_title">
          <span>Products</span>
          <span>20 items</span>
        </div>
        <div className="product_wrapper_header_button">
          <button>
            <AddIcon />
            <span>Add New</span>
          </button>
        </div>
      </div>
      <ProductFilter/>
      <Orders/>
    </section>
  );
}

export default Products;
