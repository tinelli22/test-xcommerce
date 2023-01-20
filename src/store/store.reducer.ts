import { IStoreState, StoreActionType } from "./store";

const reducer = (state: IStoreState, action: StoreActionType) => {
    switch (action.type) {
        case 'SET_SEARCH':
           return {
            ...state,
            search: action.payload
           }
           case 'SET_MODAL':
            return {
             ...state,
             modal: action.payload
            }
    
        default:
           return state
    }
}

export default reducer