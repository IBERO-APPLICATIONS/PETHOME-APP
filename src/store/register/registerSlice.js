import { createSlice } from '@reduxjs/toolkit';


export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        email: 'admin',
        newPassword: '',
        againPassword: '',
    },
    reducers: {
        login: ( credentials, { payload } ) => {
            credentials.email = payload.email,
            credentials.newPassword = payload.newPassword,
            credentials.againPassword =  payload.againPassword
        },
    },
});


export const { login } = registerSlice.actions;