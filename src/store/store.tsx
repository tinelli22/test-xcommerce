import { createContext, useReducer } from 'react'
import NamesActionsStoreTypes from './actions.store'
import reducer from './store.reducer'

export type ModalStateType = {
    content: () => React.ReactNode ,
    title: string;
} | null;

export interface IStoreState {
    modal: ModalStateType
    search: string
}

export interface StoreActionType {
    type: NamesActionsStoreTypes
    payload: any
}

interface IAppContext {
    state: IStoreState;
    dispatch: React.Dispatch<StoreActionType>
}

const initialState: IStoreState = {
    modal: null,
    search: ''
}

const store = createContext<IAppContext>({
    state: initialState,
    dispatch: () => null
})

const { Provider } = store

const AppProvider = ({ children }: { children: JSX.Element }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export {
    store,
    AppProvider
}