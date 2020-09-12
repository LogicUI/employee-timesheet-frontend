import React from "react";
import styled from "styled-components";

const ButtonText = styled.button`
  width: 100%;
  height: 47px;
  background: ${(props) => (props.isLoading ? "#AAAAAA" : "#00CA7F")};
  color: white;
  border: none;
  outline: none;
  margin-top: 20px;
`;

const Button = (props) => {
  const isLoading = () => {
    if (props.loading) {
      return (<ButtonText isLoading>Loading...</ButtonText>);
    }else{
    return (<ButtonText onClick={props.onClick}>{props.children}</ButtonText>);
    }
  };

  return (isLoading());
};

// #AAAAAA;

export default Button;
