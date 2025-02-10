import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    username : string;
    email: string;
}

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

const initialState:AuthState = {
    isAuthenticated: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        login: (state, action: PayloadAction<User>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

// const authReducer = (state=initialState, action:AuthActionTypes):AuthState => {
//     switch (action.type) {
//         case LOGIN:
//             return {
//                 ...state,
//                 isAuthenticated : true,
//                 user: action.payload,
//             };
//         case LOGOUT:
//             return {
//                 ...state,
//                 isAuthenticated : false,
//                 user: null,
//             };
//         default:
//              return state
//     }
// } 

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
