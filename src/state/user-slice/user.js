import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice(
    {
        name:"currentUser",
        initialState:null,
        reducers:{
            setCurrentUser: (state, action ) => state = action.payload 
        }
    }
)

//console.log(slice)
export const{setCurrentUser} = slice.actions
export default slice.reducer