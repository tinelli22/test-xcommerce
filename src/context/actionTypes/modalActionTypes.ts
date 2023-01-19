import React from "react";
import { ActionMap, ActionTypesContext } from "../reducers";


export type ModalPayload = {
    [ActionTypesContext.SET]: {
        title: string,
        content: () => void
    },
}

export type ModalStateType = {
    content: () => React.ReactNode ,
    title: string;
} | null;

type ModalActionTypes = ActionMap<ModalPayload>[keyof ActionMap<ModalPayload>];

export default ModalActionTypes;
