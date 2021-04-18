import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {firestore,convertCollectionsFromFirebase} from '../firebase/firebase.utils'

export const fetchCollections = createAsyncThunk(
  'shopData/fetchCollections',
  async () => {
    const collectionRef = firestore.collection('collections')
    const collections = await  collectionRef.get().then(doc =>{
    const convertedCollection=convertCollectionsFromFirebase(doc)
    //console.log(convertedCollection)
    return convertedCollection
  })
  //console.log(collections)
  return collections

  }
)

            
const slice = createSlice(
    {
        name:"shopData",
        initialState:{
          collections:null,
          status:"loading"
        },
        reducers:{},
        extraReducers: {
          [fetchCollections.pending]: (state,action) => {
            state.status = "loading"
          },
          [fetchCollections.fulfilled]: (state,action) => {
            console.log(action.payload)
            state.collections = action.payload
            state.status = "success"
          },
          [fetchCollections.rejected]: (state,action) => {
            console.log(action.payload)
            state.status = "failed"
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