import { configureStore } from "@reduxjs/toolkit";
import logsReducer from "../slice/logsReducer";
import techsReducer from "../slice/techsReducer";

export default configureStore({
  reducer: {
    logs: logsReducer,
    techs: techsReducer,
  },
});
