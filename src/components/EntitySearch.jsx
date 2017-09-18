import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class EntitySearch


extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
    }

    render()
    {
        return (

        );
    }
}

EntitySearch.jsx.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(action, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EntitySearch.jsx)
