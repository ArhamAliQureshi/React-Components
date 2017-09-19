import React from 'react';
import {connect} from 'react-redux';
import EntitySearchFilter from './EntityCRUD.jsx';


class EntitySearch extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };

    this.filterSubmitHandler = this.filterSubmitHandler.bind(this);

  }

  filterSubmitHandler(data){
    console.log(data);
  }

  render() {
    return (
      <EntitySearchFilter onSubmit={this.filterSubmitHandler}></EntitySearchFilter>
    );
  }
}

EntitySearch.propTypes = {
  //myProp: PropTypes.string.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(EntitySearch);


