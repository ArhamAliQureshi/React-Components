import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import StatusBar from './common/StatusBar.jsx';

class StatusWizard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <StatusBar></StatusBar>
        );
    }
}

StatusWizard.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(action, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusWizard)
