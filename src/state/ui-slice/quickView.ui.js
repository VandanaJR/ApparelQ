import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice(
    {
        name:"quickViewClick",
        initialState:{
            openQV:false,
            itemDetails:null
        },
        reducers:{
            openQVToggle: (state)=> {
                const value = state.openQV
                state.openQV = !value
            },
            trackItem: (state,action) => {
                state.itemDetails = action.payload.itemDetails
            }
        }
    }
)

console.log(slice)
export const{openQVToggle,trackItem} = slice.actions
export default slice.reducer