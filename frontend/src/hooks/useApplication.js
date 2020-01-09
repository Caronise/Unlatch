import { useReducer, useEffect } from "react";
import reducer from "../reducers/app_reducer";
import axios from "axios";


function useApplication() {

  const [state, dispatch] = useReducer(reducer, {
    parts: [],
    instructions: [],
    videos: [],
    notes: []
  });

  // This makes axios requests on load to fetch all the data needed for the user to do a project
  useEffect(() => {
    Promise.all([
      axios.get("#LINK TO PARTS"),
      axios.get("#LINK TO INSTRUCTIONS"),
      axios.get("#LINK TO VIDEOS"),
      axios.get("#LINK TO NOTES"),
    ]).then((all) => {
      // DISPATCH
    });
  }, []);

  return null // HAS TO EVENTUALLY BE CHANGED TO RETURN THE STATE AND ADDITIONAL FUNCTIONS IF ANY
}

export default useApplication