import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomerList from './CustomerList';
import { base } from '../../hocs';
import { customerActions } from '../../actions';
import Fab from '../../components/Fab';
class Customer extends React.Component {
    async componentDidMount() {
        try {
            this.props.showLoading();
            await this.props.getCustomers();
        } catch (error) {
            this.props.showSnackBar(error.message);
        } finally {
            this.props.hideLoading();
        }
    }

    render() {
        return (
            <>
                <Fab
                    handleClick={() => {
                        this.props.history.push('/customer/add');
                    }}
                />
                <CustomerList rows={this.props.customers} />
            </>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customer.list,
});

const mapDispatchToProps = dispatch => {
    return {
        getCustomers: async () => {
            await dispatch(customerActions.getCustomers());
        },
    };
};

Customer.propTypes = {
    customers: PropTypes.arrayOf(PropTypes.object).isRequired,
    getCustomers: PropTypes.func.isRequired,
    showSnackBar: PropTypes.func.isRequired,
    showLoading: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};
export default base(connect(mapStateToProps, mapDispatchToProps)(Customer));
