import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr;
  margin-top: ${props => props.size};

`;

const HeaderText = styled.h1`
  font-size: 16px;
  margin-bottom: 0;
`;



const TimeEmptyDisplay = styled.h1`
  margin: 0;
`;

const TimeSheetClockDisplay = styled.h1`
    margin:5px 0;
    font-size:22px;
`

const TimeDisplay = ({ timeSheet }) => {
  const reunderTimeSheet = () => {
    if (timeSheet.length > 0) {
      return (
        <Wrapper>
            {
                timeSheet.map((data,index) => {
                    return (
                    <React.Fragment  key={index}>
                        <TimeSheetClockDisplay  >
                            {data.checkIn}
                        </TimeSheetClockDisplay >
                        <TimeSheetClockDisplay   >
                            {data.checkOut}
                        </TimeSheetClockDisplay >
                    </React.Fragment>
                    )
                })
            }
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <TimeEmptyDisplay>-</TimeEmptyDisplay>
          <TimeEmptyDisplay>-</TimeEmptyDisplay>
        </Wrapper>
      );
    }
  };

  return (
    <div>
      <Wrapper size="40px">
        <HeaderText>Clock in</HeaderText>
        <HeaderText>Clock out</HeaderText>
      </Wrapper>
      {reunderTimeSheet()}
    </div>
  );
};

export default TimeDisplay;
