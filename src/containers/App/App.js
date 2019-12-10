import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppRouter from '../../routes';
import LoadingIndicator from '../../components/LoadingIndicator';
import SnackBar from '../../components/SnackBar';
import { commonActions } from '../../actions';

class App extends React.Component {
    componentDidMount() {
        this.handleSnackBarClose = this.handleSnackBarClose.bind(this);
    }

    handleSnackBarClose() {
        this.props.hideSnackBar();
    }

    render() {
        return (
            <div>
                <SnackBar
                    openSnackBar={this.props.openSnackBar}
                    message={this.props.snackBarMessage}
                    handleSnackBarClose={this.handleSnackBarClose}
                />
                <LoadingIndicator isLoading={this.props.isLoading} />
                <AppRouter />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.common.isLoading,
    openSnackBar: state.common.openSnackBar,
    snackBarMessage: state.common.snackBarMessage,
});

const mapDispatchToProps = dispatch => {
    return {
        hideSnackBar: () => {
            dispatch(commonActions.hideSnackBar());
        },
    };
};

App.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    openSnackBar: PropTypes.bool.isRequired,
    hideSnackBar: PropTypes.func.isRequired,
    snackBarMessage: PropTypes.string,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
