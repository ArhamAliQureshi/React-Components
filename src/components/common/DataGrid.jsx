import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
// import $ from 'jquery';
// // BEGIN GLOBAL MANDATORY STYLES
// import '../metronic/assets/googleapis.css.css';
// import '../metronic/assets/global/plugins/font-awesome/css/font-awesome.min.css';
// import '../metronic/assets/global/plugins/simple-line-icons/simple-line-icons.min.css';
// import '../metronic/assets/global/plugins/bootstrap/css/bootstrap.min.css';
// import '../metronic/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css';
// // END GLOBAL MANDATORY STYLES
// // BEGIN PAGE LEVEL PLUGINS
// import '../metronic/assets/global/plugins/datatables/datatables.min.css';
// import '../metronic/assets/global/plugins/datatables/buttons.dataTables.min.css';
// import '../metronic/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css';
// // END PAGE LEVEL PLUGINS
// // BEGIN THEME GLOBAL STYLES
// import '../metronic/assets/global/css/components.min.css';
// import '../metronic/assets/global/css/plugins.min.css';
// // END THEME GLOBAL STYLES
// // BEGIN THEME LAYOUT STYLES
// import '../metronic/assets/layouts/layout2/css/layout.min.css';
// // import './metronic/assets/layouts/layout2/css/themes/blue.min.css';
// import '../metronic/assets/layouts/layout2/css/custom.min.css';
// // END THEME LAYOUT STYLES
//
//
// $.DataTable = require('datatables.net');
//

class DataGrid extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: props.title,
      dataGridTable: undefined,
      gridColumns: Object.assign([], props.gridColumns),
      gridData: Object.assign([], props.gridData),
      paging: props.paging,
      export: props.export
    };

  }

  componentDidMount() {
    let _this = this;


    $(document).ready(function () {
      let table = $('#DataGrid').DataTable({
        columns: _this.state.gridColumns,
        data: _this.state.gridData,
        paging: _this.state.paging,
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
        ]
      });

    });
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.state.gridData) !== JSON.stringify(nextProps.gridData)) {
      this.setState({gridData: Object.assign([], nextProps.gridData)});
    }
  }

  componentWillUnmount() {
    $('.data-table-wrapper')
      .find('table')
      .DataTable()
      .destroy(true);
  }

  render() {
    console.log("INNER", this.state.gridData);
    return (
      <div>
        <h1>{this.state.title}</h1>
        <table id="DataGrid" className="display" width="100%"/>
      </div>
    );
  }

}

DataGrid.propTypes = {
  title: PropTypes.string.isRequired,
  gridColumns: PropTypes.array.isRequired,
  // gridData: PropTypes.array.optional,
  paging: PropTypes.bool.isRequired,
  export: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(action, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DataGrid);
