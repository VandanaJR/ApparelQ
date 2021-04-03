import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice(
    {
        name:"cartClicks",
        initialState:{
            openCart:false,
        },
        reducers:{
            openCartToggle: (state)=> {
                const value = state.openCart
                state.openCart = !value
            },
        }
    }
)

//console.log(slice)
export const{openCartToggle} = slice.actions
export default slice.reducer