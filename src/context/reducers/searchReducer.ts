import SearchActionTypes from "../actionTypes/searchActionTypes";

const searchReducer = (state: string, action: SearchActionTypes) => {
  switch (action.type) {
    case 'SET':
      return action.payload.search;

    default:
      return state;
  }
};

export default searchReducer;
