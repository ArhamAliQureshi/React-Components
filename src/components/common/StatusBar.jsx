import React, {PropTypes} from 'react';
import { Steps } from 'antd';
const Step = Steps.Step;
import 'antd/dist/antd.css';
import '../../styles/StyleFixses.scss';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 20px;
`;



const StatusBar = ({states}) =>{
  /*This is sample Data*/
  // states = [{
  //   status: "finish", title: "Initiation"
  // },{
  //   status: "process", title: "Approved"
  // },{
  //   status: "error", title: "To GRP"
  // },{
  //   status: "wait", title: "Disbursed"
  // },{
  //   status: "wait", title: "Debit from Account"
  // }];
  /*This is sample Data*/

  let stepList = states.map((state, index) => {
    return <Step key={index} status={state.status} title={state.title} />;
  });

  return (
    <Wrapper>
      <Steps>
        {stepList}
      </Steps>
    </Wrapper>
  );
};

StatusBar.propTypes = {
  states: PropTypes.array.isRequired
};

export default StatusBar;
