import React, { createContext, useReducer } from 'react'
import ModalActionTypes, { ModalType } from './actionTypes/modalActionTypes';
import mainReducer from './reducers';



export type InitialStateType = {
    modal: ModalType;
}

const initialState: InitialStateType = {
    modal: null,
}

const AppContext = createContext<{
    state: InitialStateType,
    dispatch: React.Dispatch<ModalActionTypes>
}>({
    state: initialState,
    dispatch: () => null
});

const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return(
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export {
    AppContext,
    AppProvider
}