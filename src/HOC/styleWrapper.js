import React from "react";
import commonStyles from "./../styles/commonStyles";

const translateProps = props => {
  let _styles = { ...commonStyles.disable };
  if (props.disable) {
    _styles = { ..._styles, ...commonStyles.disable };
  }
  const newProps = { ...props, styles: _styles };
  return newProps;
};

export default WrappedComponent => {
  return function WrappedRender(args) {
    return WrappedComponent(translateProps(args));
  };
};
