/******************************************************************************
 * Copyright (c) 2021.  Inc. Rights reserved.                          *
 * Data modelings and methods used are assets of  Inc.                 *
 * toast/index.tsx
 * hooks :
    * 
    *
 * last modify : jh.jeong
 ******************************************************************************/
// Library
import React, { useState, useEffect } from "react";
import { Slide } from "@progress/kendo-react-animation";
import { Notification, NotificationGroup } from "@progress/kendo-react-notification";
//
// Module
//

export const ToastType = {
    warning : "warning",
    success : "success",
    error : "error",
    info : "info",
    none : "none",
}

export type ToastProps = {
    text : string;
    visible : boolean;
    close : ()=>void;
    style ?: object;
    notiStyle ?: object;
    type ?: any;
}
interface FinalToastProps extends ToastProps {};

export const ToastComponent : React.FunctionComponent<FinalToastProps> = ( props )=>{
    return(
        <Slide 
            direction={props.visible ? 'left' : "right"}
            style={props.style ? props.style : { position : "absolute", top: 20, alignItems: 'center' }}
            >
            {props.visible && <Notification
                type={{ style: props.type }}
                closable={true}
                onClose={props.close}
                style={{fontSize : "1.4em", ...props.notiStyle}}
                >
                <span>{props.text}</span>
            </Notification>}
        </Slide>
    );
}
