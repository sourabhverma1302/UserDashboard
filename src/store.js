import { configureStore } from "@reduxjs/toolkit";
import SetShow from "./slices/SetShow";

const store=configureStore({
    reducer:{
        ShowOrNot:SetShow
    }
})
export default store;