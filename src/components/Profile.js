import React, {useState} from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    font-style: normal;
    font-weight: bold;
    flex-direction:column;
`

const JobTitle = styled.h1`
    font-size:22px;
    color: #777777;
    margin-bottom:0;
`


const Name = styled.h1`
    font-size:16px;
    color: #777777;
    margin:0;


`

const Profile = ({firstName,job}) => {

    return (
        <Wrapper>
            <JobTitle>{job}</JobTitle>
            <Name>{firstName}</Name>
        </Wrapper>
    )
}

export default Profile;