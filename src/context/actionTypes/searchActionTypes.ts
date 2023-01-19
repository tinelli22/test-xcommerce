import { ActionMap, ActionTypesContext } from "../reducers";


export type SearchPayload = {
    [ActionTypesContext.SET]: string
}

export type SearchStateType = string

type SearchActionTypes = ActionMap<SearchPayload>[keyof ActionMap<SearchPayload>];

export default SearchActionTypes;
