import { configureStore } from "@reduxjs/toolkit";
import { myPageReducer } from "../../myPage";
import { myRecordReducer } from "../../myRecord";
import { columnPageReducer } from "../../columnPage/store";
import { authenticationReducer } from "../../authentication/store";

export const store = configureStore({
  reducer: {
    myPage: myPageReducer,
    myRecord: myRecordReducer,
    columnPage: columnPageReducer,
    authentication: authenticationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
