import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import DataGrid from './common/DataGrid.jsx';
import {bindActionCreators} from 'redux';
// import {Popover, Button} from 'antd';
import * as entityActions from '../actions/entityActions';

class EntityWorkBoard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      gridColumns: [
        {
          title: "Name", data: "name", render: (data, type, row) => {
          return '<span><img src=' + row.icon + '></span><span>' + data + '</span>';
        }
        },
        {title: "Last Date Settlement", data: "lastDateSettlement"},
        {title: "Days", data: "days"},
        {title: "Settlement Period", data: "settlementPeriod"},
        {title: "Total Trans", data: "totalTrans"},
        {title: "Pending Exception", data: "pendingException"},
        {title: "Refund Filed", data: "refundFiled"},
        {title: "Last Date Recon", data: "lastDateRecon"},
        {title: "Dispute Filed", data: "disputeFiled"},
        {
          title: "Actions", data: "orderId", render: () => {

          return '<h1>HI</h1>';
        }
        }
      ],
      gridData: undefined,
      actionsPopoverVisible: false
    };
  }

  componentDidMount() {
    this.props.actions.getEntityRecords();
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.state.gridData) !== JSON.stringify(nextProps.gridData)) {
      this.setState({gridData: Object.assign([], nextProps.gridData)});
    }
  }

  render() {
    return (
      <DataGrid title="Entity Workboard" gridColumns={this.state.gridColumns} gridData={this.state.gridData}
                paging={true} export={true}/>
    );
  }

}

EntityWorkBoard.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    gridData: state.entityRecords
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(entityActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EntityWorkBoard);
