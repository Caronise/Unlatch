import { useReducer, useEffect } from "react";
import reducer, { SET_INITIAL_DATA } from "../reducers/app_reducer";
import axios from "axios";


function useApplication() {

  const [state, dispatch] = useReducer(reducer, {
    user: {email: ""} ,
    parts: [],
    instructions: [],
    videos: [],
    notes: []
  });

  // This makes axios requests on load to fetch all the data needed for the user to do a project
  useEffect(() => {
    debugger;
    Promise.all([
      axios.get("/vehicles/3")
      // axios.get("#LINK TO PARTS"),
      // axios.get("#LINK TO INSTRUCTIONS"),
      // axios.get("#LINK TO VIDEOS"),
      // axios.get("#LINK TO NOTES"),
    ]).then((all) => {
      console.log(all[0].data)
      dispatch({ type: SET_INITIAL_DATA, parts: all[0].data})
    });
  }, []);

  return [ state, dispatch ]
}

export default useApplication