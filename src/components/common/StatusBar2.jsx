import React, {PropTypes} from 'react';
import jQuery from 'jquery';

const StatusBar = ({componentId, states}) =>{
  jQuery(document).ready(function() {
    jQuery.bootstrapWizard = require('twitter-bootstrap-wizard');
    jQuery("#"+componentId).bootstrapWizard();
  });

  return (
    <div id={componentId}>{states}</div>
  );
};


StatusBar.propTypes = {
  states: PropTypes.string.isRequired
};

export default StatusBar;
