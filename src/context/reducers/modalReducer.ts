import ModalActionTypes, { ModalStateType } from "../actionTypes/modalActionTypes";

const modalReducer = (state: ModalStateType, action: ModalActionTypes) => {
  switch (action.type) {
    case 'SET':
      let obj = null
      
      if(action.payload) {
        obj = action.payload
      }

      return obj

    default:
      return state;
  }
};

export default modalReducer;
