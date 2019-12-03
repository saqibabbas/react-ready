import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

Product.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    getProducts: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
