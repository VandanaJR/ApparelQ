import {createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'

const slice = createSlice(
    {
        name:"cart",
        initialState:{
            cartItems:[],
            existsInCartQVPage:false,
            existsInCartQV:false,
            totalQuantity:0
        },
        reducers:{
            addCartItem: (state,action)=> {
              state.cartItems.push({...action.payload.item,...action.payload.quantity,...action.payload.size})
              state.totalQuantity = totalQuantity(state)
              console.log("Item added!")
                },
            inCartfromQVPage : (state,action)=>{
                const existingInCart = state.cartItems.findIndex(cartItem => cartItem.id ===  action.payload.id)
                //console.log(existingInCart)
                existingInCart!==-1 ? state.existsInCartQVPage=true : state.existsInCartQVPage=false
            },

            inCartfromQV: (state,action)=>{
                state.existsInCartQV = action.payload
            },
            removeItemFromCart: (state,action)=>{
                state.cartItems=state.cartItems.filter(cartItem=> cartItem.id !== action.payload.id)
                state.totalQuantity = totalQuantity(state)
                //console.log(state.cartItems)
            },
            updateCartQuantity: (state,action)=>{
                
                const index = state.cartItems.findIndex(cartItem => cartItem.id ===  action.payload.id)
                state.cartItems[index].quantity=action.payload.quantity
                //console.log("reducer-quantity",state.cartItems[index].quantity)
                state.totalQuantity = totalQuantity(state)
            },
            paymentSuccesfull: state =>{
                state.cartItems=[]
                state.totalQuantity= 0
            }
            
        }
    }
)

export const{addCartItem,inCartfromQVPage,inCartfromQV,removeItemFromCart,updateCartQuantity,paymentSuccesfull} = slice.actions
export default slice.reducer

//SELECTORS
export const totalQuantity = createSelector(
    state=>  state.cartItems.map(cartItem=> cartItem.quantity),
    cartItemQuantity=> cartItemQuantity.reduce((accumulatedQuantity,quantity)=> accumulatedQuantity+quantity,0)
)

export const cartTotal = createSelector(
    state=>  state.cartItems,
    cartItems =>  cartItems.reduce((accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity*cartItem.price,0)
)
