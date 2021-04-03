import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice(
    {
        name:"quickViewClick",
        initialState:{
            openQV:false,
        },
        reducers:{
            openQVToggle: (state)=> {
                const value = state.openQV
                state.openQV = !value
            }
        }
    }
)

console.log(slice)
export const{openQVToggle} = slice.actions
export default slice.reducer