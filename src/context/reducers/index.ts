import ModalActionTypes from "../actionTypes/modalActionTypes";
import { InitialStateType } from "../context";
import modalReducer from "./modalReducer";

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

const mainReducer = ({ modal }: InitialStateType, action: ModalActionTypes) => ({
  modal: modalReducer(modal, action),
});

export default mainReducer;
