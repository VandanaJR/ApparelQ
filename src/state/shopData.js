import {createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'

const slice = createSlice(
    {
        name:"shopData",
        initialState:{
          collections:null
        },
        reducers:{
          setShopData: (state,action)=>{
            state.collections = action.payload
          }
        }
    }
)

//console.log(slice)
export const {setShopData} = slice.actions
export default slice.reducer

//SELECTORS

export const selectCategory = (categoryUrlParam)=>createSelector(
  state =>  state.collections,
  collections => collections[categoryUrlParam]
)