import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DashboardWidgets from './DashboardWidgets';
import { dashboardActions } from '../../actions';
import { base } from '../../hocs';

class Dashboard extends React.Component {
    async componentDidMount() {
        try {
            this.props.showLoading();
            await this.props.getOrders();
        } catch (error) {
            this.props.showSnackBar(error.message);
        } finally {
            this.props.hideLoading();
        }
    }

    render() {
        return <DashboardWidgets orders={this.props.orders} />;
    }
}

const mapStateToProps = state => ({
    orders: state.dashboard.orders,
});

const mapDispatchToProps = dispatch => {
    return {
        getOrders: async () => {
            await dispatch(dashboardActions.getOrders());
        },
    };
};

Dashboard.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.object).isRequired,
    getOrders: PropTypes.func.isRequired,
    showSnackBar: PropTypes.func.isRequired,
    showLoading: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired,
};
export default base(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
