import React, { useReducer } from "react";

import { POPULATE_ACTIVE_PROJECT } from "../types";
import PackageContext from "./packageContext";
import packageReducer from "./packageReducer";
import API from "../../api";

const PackageState = ({ children }) => {
  const initialState = {
    activeProject: null,
  };

  const [state, dispatch] = useReducer(packageReducer, initialState);

  const fetchActiveProject = async (platform, name) => {
    try {
      const project = await API.librariesIo.getProject(platform, name);
      // would normally add a parsing layer in here to clean and validate
      dispatch({ type: POPULATE_ACTIVE_PROJECT, payload: project });
    } catch (err) {
      console.error(err); // would be toast or something better than silent fail
    }
  };

  return (
    <PackageContext.Provider
      value={{
        activeProject: state.activeProject,
        fetchActiveProject,
      }}
    >
      {children}
    </PackageContext.Provider>
  );
};

export default PackageState;
