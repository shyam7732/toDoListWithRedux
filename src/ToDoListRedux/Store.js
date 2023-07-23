import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./Slice"

export default configureStore({
    reducer: {
        todo: listReducer
    }
});
