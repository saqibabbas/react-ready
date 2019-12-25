import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { commonActions } from '../actions';

const base = MainComponent => {
    class BaseComponent extends React.Component {
        componentDidMount() {}

        render() {
            return <MainComponent {...this.props} />;
        }
    }
    const mapStateToProps = () => ({});

    const mapDispatchToProps = dispatch => {
        return {
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
    return withRouter(
        connect(mapStateToProps, mapDispatchToProps)(BaseComponent),
    );
};

export default base;
