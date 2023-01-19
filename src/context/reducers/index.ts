import ModalActionTypes from "../actionTypes/modalActionTypes";
import SearchActionTypes from "../actionTypes/searchActionTypes";
import { InitialStateType } from "../context";
import modalReducer from "./modalReducer";
import searchReducer from "./searchReducer";

export const ActionTypesContext = {
  SET: 'SET',
} as const;

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

const mainReducer = ({ modal, search }: InitialStateType, action: ModalActionTypes | SearchActionTypes) => ({
  modal: modalReducer(modal, action),
  search: searchReducer(search, action)
});

export default mainReducer;
