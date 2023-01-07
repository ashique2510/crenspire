import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userReducer";


const store = configureStore({

    reducer: {
        userValue:userReducer
    }

})

export default store