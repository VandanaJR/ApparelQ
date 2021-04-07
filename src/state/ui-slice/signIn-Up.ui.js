import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice(
    {
        name:"signInUpPopup",
        initialState:{
            signIn:false,
            signUp:false
        },
        reducers:{
            signInToggle: (state)=> {
                const value = state.signIn
                state.signIn = !value
                console.log("Sign in opened or closed")
            },
            signUpToggle: (state)=> {
                const value = state.signUp
                state.signUp = !value
                console.log("Sign up opened or closed")
            },
        }
    }
)

//console.log(slice)
export const{signInToggle,signUpToggle} = slice.actions
export default slice.reducer