import React from "react";
import "./ProductFilter.scss";
import SearchIcon from "@material-ui/icons/Search";

function ProductFilter() {
  return (
    <div className="product_wrapper_filter">
      <div className="product_wrapper_filter_item product_wrapper_filter_date">
        <span className="product_wrapper_filter_title">Date</span>
        <select className=" product_wrapper_filter_select">
          <option selected> All Date </option>
          <option>January 2020</option>
          <option>Febrary 2020</option>
          <option>March 2020</option>
        </select>
      </div>
      <div className="product_wrapper_filter_category product_wrapper_filter_item">
        <span className="product_wrapper_filter_title">Catagory</span>
        <select className=" product_wrapper_filter_select">
          <option selected> All Category </option>
          <option>Homes and Living</option>
          <option>Electronic</option>
          <option>Fashions</option>
          <option>Others</option>
        </select>
      </div>
      <div className="product_wrapper_filter_search product_wrapper_filter_item">
        <span>
          <input type="text" placeholder="Search" />
          <SearchIcon className="search_icon" />
        </span>
      </div>
      <div className="product_wrapper_filter_button  product_wrapper_filter_item">
        <button>Filter</button>
      </div>
    </div>
  );
}

export default ProductFilter;
