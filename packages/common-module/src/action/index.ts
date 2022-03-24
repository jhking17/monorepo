/******************************************************************************
 * Copyright (c) 2021.  Inc. Rights reserved.                          *
 * Data modelings and methods used are assets of  Inc.                 *
 ******************************************************************************/
export * from './user';

export * from './project';

export * from './employee';

export * from './multitab';

export * from './clientsetting';

export * from './work';

export * from "./dashboard";

export type ActionType = {
    type : string, 
    payload : any
};