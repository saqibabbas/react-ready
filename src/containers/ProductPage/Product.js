import React from 'react';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import { productActions } from '../../actions';

class Product extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }
    render() {
        return <ProductList rows={this.props.products} />;
    }
}

const mapStateToProps = (state, ownProps) => ({
    products: state.product.list,
});

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(productActions.getProducts()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
