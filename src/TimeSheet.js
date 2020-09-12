import React, { useState, useEffect } from "react";
import Profile from "./components/Profile";
import styled from "styled-components";
import fetchUsers from "./apis/fetchUsers";
import TimeDisplay from "./components/TimeDisplay";
import Button from "./components/Button";
import fetchTimeSheet from "./apis/fetchTimeSheet";
import checkInUser from "./apis/checkInUser";
import checkOutUser from "./apis/checkOutUser";

const Wrapper = styled.div`
  padding: 10px;
`;

const ErrorText = styled.h1`
font-size:16px;
color:red;
`

const TimeSheet = () => {
  const [userProfile, setUserProfile] = useState({
    firstName: "",
    lastName: "",
    job: "",
  });

  const [timeSheet, setTimeSheet] = useState([]);

  const [isCheckIn, setButtonToCheckOut] = useState(false);
  const [isLoading, setLoadingState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      const users = await fetchUsers();
      setUserProfile(users);
      getTimeSheetData();
    })();

    
  }, []);

  const getTimeSheetData = async () => {
    const timeSheetData = await fetchTimeSheet(1);
    if (timeSheetData.length > 0) {
      const [latestTimeSheet] = timeSheetData;
      latestTimeSheet.checkOut === "-"
        ? setButtonToCheckOut(true)
        : setButtonToCheckOut(false);
    }
    setTimeSheet(timeSheetData);
  };

  const onCheckInClick = async () => {
    setLoadingState(true);
    const checkInSuccssfully = await checkInUser(1);
    if (checkInSuccssfully) {
      setButtonToCheckOut(true);
       setTimeout(() => {
        setLoadingState(false);
      }, 1000);
      const timesheet = await fetchTimeSheet(1);
      setTimeSheet(timesheet);
    }else{
      setErrorMessage("An error occurred. Please try again");
    }
  };

  const onCheckOutClick = async () => {
    setLoadingState(true);
    const checkOutSuccessfully = await checkOutUser(1);
    if (checkOutSuccessfully) {
      setButtonToCheckOut(false);
      setTimeout(() => {
        setLoadingState(false);
      }, 1000);
      const timesheet = await fetchTimeSheet(1);
      setTimeSheet(timesheet);
    }else{
      setErrorMessage("An error occurred. Please try again");
    }
  };

  const renderButtons = () => {
    if (!isCheckIn) {
      return (
        <Button onClick={onCheckInClick} loading={isLoading}>
          Check In
        </Button>
      );
    } else {
      return (
        <Button onClick={onCheckOutClick} loading={isLoading}>
          Check Out
        </Button>
      );
    }
  };

  return (
    <Wrapper>
      <Profile
        firstName={userProfile.firstName}
        lastName={userProfile.lastName}
        job={userProfile.job}
      ></Profile>
      <TimeDisplay timeSheet={timeSheet}></TimeDisplay>
      {renderButtons()}
      {errorMessage &&  <ErrorText></ErrorText>}
    </Wrapper>
  );
};

export default TimeSheet;
