import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        page: "vet",
        sideBar: true
    },
    reducers: {
        changePage: ( state , { payload } ) => {   
            state.page = payload.pageActivated            
        },
        showSideBar: ( state, { payload } ) => {
            state.sideBar = payload       
        },
    },
})

export const { changePage, showSideBar } = homeSlice.actions;