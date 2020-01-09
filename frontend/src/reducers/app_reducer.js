export const SET_PARTS = "SET_PARTS";
export const SET_INSTRUCTIONS = "SET_INSTRUCTIONS";
export const SET_VIDEOS = "SET_VIDEOS";
export const SET_NOTES = "SET_NOTES";


function reducer(state, action) {
  switch (action.type) {
    case SET_PARTS:
      return {
        
      };
    default:
      return state;
  }
};

export default reducer;