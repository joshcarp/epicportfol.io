
import React from 'react';

import classes from './Button.css';
import styled from "styled-components";


const Button = styled.button`
  background-color: ${props => theme[props.theme].default };
  color: white;
  font-size: 10px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 5px 0px;
  transition: ease background-color 250ms;
  flex-direction: row;
  &:hover{
   background-color: #FFC0CB
  }
  cursor: pointer;
`;


const theme = {
    blue: {
        default: '#3949ab',
        hover: '#DDA0DD'
    },
    pink: {
        default: '#FF1493',
        hover: '#283693'
    }
}

Button.defaultProps = {
    theme: 'blue'
}

// const button = (props) => (
//     <button
//         className={[classes.Button, classes[props.btnType]].join(' ')}
//         onClick={props.clicked}>{props.children}</button>
// );

export default Button;