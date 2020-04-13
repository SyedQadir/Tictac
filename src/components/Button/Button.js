import React from 'react';
const Button = (props) => <button className="red green" onClick={props.clickHandler}> {props.children}</button>
export default Button;