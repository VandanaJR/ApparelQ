import {createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'

const slice = createSlice(
    {
        name:"cart",
        initialState:{
            cartItems:[],
            existsInCartQVPage:false,
            existsInCartQV:false,
            totalQ:0
        },
        reducers:{
            addCartItem: (state,action)=> {
              state.cartItems.push({...action.payload.item,...action.payload.quantity,...action.payload.addClicked})
              state.totalQ = totalQuantity(state)
              console.log("Item added!","  Total:",state.totalQ )
                },
            inCartfromQVPage : (state,action)=>{
                const existingInCart = state.cartItems.findIndex(cartItem => cartItem.id ===  action.payload.id)
                //console.log(existingInCart)
                existingInCart!==-1 ? state.existsInCartQVPage=true : state.existsInCartQVPage=false
            },

            inCartfromQV: (state,action)=>{
                state.existsInCartQV = action.payload
            }
            
        }
    }
)

export const{addCartItem,inCartfromQVPage,inCartfromQV} = slice.actions
export default slice.reducer

export const totalQuantity = createSelector(
    state=>  state.cartItems,
    cartItems=>  cartItems.reduce((accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity,0)
)