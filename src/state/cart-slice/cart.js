import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice(
    {
        name:"cart",
        initialState:{
            cartItems:[],
            existsInCartQVPage:false,
            existsInCartQV:false
        },
        reducers:{
            addCartItem: (state,action)=> {
              
                    state.cartItems.push({...action.payload.item,...action.payload.quantity,...action.payload.addClicked})
                },
            inCartfromQVPage : (state,action)=>{
                const existingInCart = state.cartItems.findIndex(cartItem => cartItem.id ===  action.payload.id)
                console.log(existingInCart)
                existingInCart!==-1 ? state.existsInCartQVPage=true : state.existsInCartQVPage=false
            },

            inCartfromQV: (state,action)=>{
               // const value =state.existsInCartQV
                //state.existsInCartQV = !value
                state.existsInCartQV = action.payload
            }
            
        }
    }
)

//Util function
// addCartItem: (state,action)=> {
//     // state.cartItems.push(action.payload.item)
//     const existingCartItem = state.cartItems.findIndex(cartItem => cartItem.id ===  action.payload.item.id)
//     //console.log(existingCartItem)
//     if(!existingCartItem){
//         state.cartItems[existingCartItem].quantity++
//         //console.log("quantity:",state.cartItems[existingCartItem].quantity)
//     }
//     else{
//         state.cartItems.push({...action.payload.item,quantity:1})
//     }
   
// }


//console.log(slice)
export const{addCartItem,inCartfromQVPage,inCartfromQV} = slice.actions
export default slice.reducer