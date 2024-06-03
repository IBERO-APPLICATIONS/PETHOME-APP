import { createSlice } from "@reduxjs/toolkit"


export const vetSlice = createSlice({
    name: 'vet',
    initialState: {
        name: "admin",
        age: "",
    },
    reducers: {
        loadVet: ( state , action ) => {   
               
        },
        addNewVet: ( state , action ) => {   
               
        },
        updateVet: ( state , action ) => {   
               
        },
        deleteVet: ( state , action ) => {   
               
        },
    },
})

export const { loadVet } = vetSlice.actions;