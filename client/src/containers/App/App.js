import React from 'react';
import PropTypes from 'prop-types';

export const withApp = (Component) => {
    const App = (props) => <Component {...props} />;

    App.defaultProps = {

    };

    App.propTypes = {

    };

    return App;
};

const mapStateToProps = () => {

};

const mapDispatchToProps = () => {

};