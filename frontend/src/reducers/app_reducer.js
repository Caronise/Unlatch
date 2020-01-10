export const SET_USER = "SET_USER";
export const SET_PARTS = "SET_PARTS";
export const SET_INSTRUCTIONS = "SET_INSTRUCTIONS";
export const SET_VIDEOS = "SET_VIDEOS";
export const SET_NOTES = "SET_NOTES";
export const SET_INITIAL_DATA = "SET_INITIAL_DATA";


function reducer(state, action) {
  switch (action.type) {
    case SET_USER:
      return {
      ...state, email: action.data.email
      };
    default:
      return state;
  }
};

export default reducer;