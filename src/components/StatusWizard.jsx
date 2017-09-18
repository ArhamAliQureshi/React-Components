import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import StatusBar from './common/StatusBar.jsx';

class StatusWizard extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          stepsStates: [{
            status: "finish", title: "Initiation"
          },{
            status: "process", title: "Approved"
          },{
            status: "error", title: "To GRP"
          },{
            status: "wait", title: "Disbursed"
          },{
            status: "wait", title: "Debit from Account"
          }]
        };
    }

    render() {
        return (
          <StatusBar componentId="wizerd"  states={this.state.stepsStates}></StatusBar>
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
