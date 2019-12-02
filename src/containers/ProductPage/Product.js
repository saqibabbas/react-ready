import React from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import { productActions } from '../../actions';

class Product extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return <ProductList rows={this.props.products} />;
    }
}

const mapStateToProps = state => ({
    products: state.product.list,
});

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(productActions.getProducts()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
