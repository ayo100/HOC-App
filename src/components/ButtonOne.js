import React from "react";
import styleWrapper from "./../HOC/styleWrapper";

const ButtonOne = props => {
  return <button style={props.styles}>I am Button One</button>;
};

export default styleWrapper(ButtonOne);
