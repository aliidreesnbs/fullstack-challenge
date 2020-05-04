import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";

import Pagination from "../../components/Pagination/Pagination";

class ProductList extends Component {
  state = {
    colValue: "col-lg-4",
    perPage: 12,
    currentPage: 1,
    pagesToShow: 3,
    gridValue: 3
  };

  onPrev = () => {
    const updatedState = { ...this.state };
    updatedState.currentPage = this.state.currentPage - 1;
    this.setState(updatedState);
  };

  onNext = () => {
    this.setState({
      ...this.state,
      currentPage: this.state.currentPage + 1
    });
  };

  goPage = n => {
    this.setState({
      ...this.state,
      currentPage: n
    });
  };

  pagination = (state, args) => {
    if (!args || !args.perPage || !args.currentPage) {
      return state;
    }
    const location = args.perPage * (args.currentPage - 1) || 0;

    return state.slice(location, location + args.perPage);
  };

  render() {
//    let isActive = this.state.colValue[this.state.colValue.length - 1];

    return (
      <div className="col-lg-9">
        <div className="row">
          {this.pagination(this.props.products, this.state).map(product => {
            let classes = `${this.state.colValue} col-md-6 mb-4`;
            return (
              <div className={classes}>
                <Product key={product.id} product={product} />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-end">
          <Pagination
            totalItemsCount={this.props.products.length}
            currentPage={this.state.currentPage}
            perPage={this.state.perPage}
            pagesToShow={this.state.pagesToShow}
            onGoPage={this.goPage}
            onPrevPage={this.onPrev}
            onNextPage={this.onNext}
          />
        </div>
      </div>
    );
  }
}

const brandFilter = (arr, brand) => {
  if (!brand) return arr;

  return arr.filter(product => brand.includes(product.brand));
};

const mapStateToProps = state => {
  const brands = state.brandFilter;

  const filterByBrandArr = brandFilter(state.shop.products, brands);

  return { products: filterByBrandArr };
};

export default connect(mapStateToProps, null)(ProductList);
