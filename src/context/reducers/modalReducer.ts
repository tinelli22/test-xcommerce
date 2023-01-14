import ModalActionTypes, { ModalType } from "../actionTypes/modalActionTypes";

const modalReducer = (state: ModalType, action: ModalActionTypes) => {
  switch (action.type) {
    case 'ADD_CONTENT':
      return {
        title: action.payload.title,
        content: action.payload.content,
      };
    
    case 'RESET_CONTENT':
      return null

    default:
      return state;
  }
};

export default modalReducer;
