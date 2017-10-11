import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import '../../node_modules/dropzone/dist/min/dropzone.min.css';
import '../../node_modules/react-dropzone-component/styles/filepicker.css';

let componentConfig = {
  iconFiletypes: ['.jpg', '.png', '.gif'],
  showFiletypeIcon: true,
  postUrl: 'no-url'
};
let djsConfig = { autoProcessQueue: false };
let eventHandlers = { addedfile: (file) => console.log(file) };


class Dropzone extends React.Component {
    render() {
      return (<DropzoneComponent config={componentConfig}
                                 eventHandlers={eventHandlers}
                                 djsConfig={djsConfig} />);
    }
}





Dropzone.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default Dropzone;
