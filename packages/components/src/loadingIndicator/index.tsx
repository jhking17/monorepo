/******************************************************************************
 * Copyright (c) 2021.  Inc. Rights reserved.                          *
 * Data modelings and methods used are assets of  Inc.                 *
 * loading_indicator/index.tsx
 * hooks :
    *
 * last modify : jh.jeong
 ******************************************************************************/
 
import React, { useState, useEffect } from "react"; // default hooks
import Backdrop, { BackdropProps } from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import styled from "styled-components";

export type LoadingIndicatorProps = {
}

interface FinalLoadingIndicatorProps extends LoadingIndicatorProps, BackdropProps {};

export const LoadingIndicatorComponent = ( props : FinalLoadingIndicatorProps )=>{
    return (
        <Loading_indicatorContainer 
            style={props.style}
            className="loading_indicator"
            open={props.open}
            >
            <CircularProgress color="secondary" />
        </Loading_indicatorContainer>
    );
}

const Loading_indicatorContainer = styled(Backdrop)`
    z-index : 2;
`;