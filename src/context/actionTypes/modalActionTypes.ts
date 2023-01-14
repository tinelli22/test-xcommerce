import React from "react";
import { ActionMap } from "../reducers";

const Actiontypes = {
    ADD_CONTENT: 'ADD_CONTENT',
    RESET_CONTENT: 'RESET_CONTENT'
} as const;


export type ModalPayload = {
    [Actiontypes.ADD_CONTENT]: {
        title: string,
        content: () => void
    },
    [Actiontypes.RESET_CONTENT]: undefined
    
}

export type ModalType = {
    content: () => React.ReactNode ,
    title: string;
} | null;

type ModalActionTypes = ActionMap<ModalPayload>[keyof ActionMap<ModalPayload>];

export default ModalActionTypes;
