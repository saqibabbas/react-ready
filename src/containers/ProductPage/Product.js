import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import { productActions, commonActions } from '../../actions';

class Product extends React.Component {
    async componentDidMount() {
        try {
            this.props.showLoading();
            await this.props.getProducts();
        } catch (error) {
            this.props.showSnackBar(error.message);
        } finally {
            this.props.hideLoading();
        }
    }

    render() {
        return (
            <>
                <ProductList rows={this.props.products} />
            </>
        );
    }
}

const mapStateToProps = state => ({
    products: state.product.list,
});

const mapDispatchToProps = dispatch => {
    return {
        getProducts: async () => {
            await dispatch(productActions.getProducts());
        },
        showSnackBar: message => {
            dispatch(commonActions.showSnackBar(message));
        },
        showLoading: () => {
            dispatch(commonActions.showLoading());
        },
        hideLoading: () => {
            dispatch(commonActions.hideLoading());
        },
    };
};

Product.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    getProducts: PropTypes.func.isRequired,
    showSnackBar: PropTypes.func.isRequired,
    showLoading: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
