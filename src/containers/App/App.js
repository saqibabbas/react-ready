import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppRouter from '../../routes';
import LoadingIndicator from '../../components/LoadingIndicator';

class App extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <>
                <LoadingIndicator isLoading={this.props.isLoading} />
                <AppRouter />
            </>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.common.isLoading,
});

const mapDispatchToProps = () => {
    return {};
};

App.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
