import React, { createContext, useReducer } from 'react'
import ModalActionTypes, { ModalStateType } from './actionTypes/modalActionTypes';
import SearchActionTypes, { SearchStateType } from './actionTypes/searchActionTypes';
import mainReducer from './reducers';

export type InitialStateType = {
    modal: ModalStateType;
    search: SearchStateType
}

const initialState: InitialStateType = {
    modal: null,
    search: ''
}

const AppContext = createContext<{
    state: InitialStateType,
    dispatch: React.Dispatch<ModalActionTypes | SearchActionTypes>
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