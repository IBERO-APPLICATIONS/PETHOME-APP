import { createSlice } from "@reduxjs/toolkit"


export const petSlice = createSlice({
    name: 'pet',
    initialState: {
        name: "admin",
        race: "" ,
        age: "",
        genre: "",
        birth: "",
        color: ""
    },
    reducers: {
        addNewPet: ( state , action ) => {   
               
        },
        updatePet: ( state , action ) => {   
               
        },
        deletePet: ( state , action ) => {   
               
        },
    },
})

export const { login } = loginSlice.actions;