import React,{useState} from 'react';
import CustomButton from '../custom-button/custombutton.componet';
import Quantity from '../quantity-component/quantity.component'
import DropdownSelection from '../drop-down/dropdown.component'
import './quickview.styles.scss'
import { useSelector,useDispatch } from 'react-redux'
import {addCartItem,inCartfromQV} from '../../state/cart-slice/cart'
import {openQVToggle} from  '../../state/ui-slice/quickView.ui'
import {openCartToggle} from '../../state/ui-slice/cart.ui'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation,Pagination,Controller ,Thumbs } from 'swiper'

import 'swiper/swiper.scss';
import 'swiper/components/thumbs/thumbs.scss'
import 'swiper/components/controller/controller.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation,Controller,Thumbs,Pagination]);




const QuickView = () =>{
    const dispatch = useDispatch()

    const itemDetails = useSelector(state => state.rootReducer.quickViewClick.itemDetails)
    const {  imageUrl_1,imageUrl_2,imageUrl_3, name, price} = itemDetails
   
    let [quantity,setCount] = useState(1)
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const qvExistsCheck = useSelector(state => state.rootReducer.cart.existsInCartQV)
    const qvPageExistsCheck=useSelector(state => state.rootReducer.cart.existsInCartQVPage)
    
    //console.log("Item exists in cart:",qvPageExistsCheck)
    const handleClick =()=> {
        if(!qvPageExistsCheck ){
            dispatch(addCartItem({item:itemDetails,quantity:{quantity}}))
            dispatch(inCartfromQV(true))
        }
        else{
            return
        }
       
        }
    //console.log("QQQuantity",props)
    return(
        <div className="quick-view-container">
            <div className="quick-view">
                <div className="image-container">
               <div className="main-image">
                
                <Swiper
                    id= "main"
                    tag="section" wrapperTag="ul"
                    spaceBetween={50}
                    slidesPerView={1}
                    //navigation
                    pagination={{ clickable: true }}
                    thumbs={{ swiper: thumbsSwiper }}
                   >
                    <SwiperSlide ><div style={{
                            backgroundImage: `url(${imageUrl_1})`,
                            backgroundSize: `contain`,
                            backgroundPosition: `center`,
                            backgroundRepeat:`no-repeat`

                        }}></div></SwiperSlide>
                    <SwiperSlide ><div style={{
                            backgroundImage: `url(${imageUrl_2})`,
                            backgroundSize: `contain`,
                            backgroundPosition: `center`,
                            backgroundRepeat:`no-repeat`

                        }}></div></SwiperSlide>
                    <SwiperSlide ><div style={{
                            backgroundImage: `url(${imageUrl_3})`,
                            backgroundSize: `contain`,
                            backgroundPosition: `center`,
                            backgroundRepeat:`no-repeat`

                        }}></div></SwiperSlide>
                </Swiper>

               
                </div>

                <div className="side-images">
                <Swiper 
                    id= "thumbs" 
                    onSwiper={setThumbsSwiper}  
                    watchSlidesVisibility 
                    watchSlidesProgress
                    spaceBetween={3}
                    slidesPerView={3}>
                        <SwiperSlide ><div style={{
                            backgroundImage: `url(${imageUrl_1})`,
                            backgroundSize: `contain`,
                            backgroundPosition: `center`,
                            backgroundRepeat:`no-repeat`

                        }}></div></SwiperSlide>
                         <SwiperSlide ><div style={{
                            backgroundImage: `url(${imageUrl_2})`,
                            backgroundSize: `contain`,
                            backgroundPosition: `center`,
                            backgroundRepeat:`no-repeat`

                        }}></div></SwiperSlide>
                        <SwiperSlide ><div style={{
                            backgroundImage: `url(${imageUrl_3})`,
                            backgroundSize: `contain`,
                            backgroundPosition: `center`,
                            backgroundRepeat:`no-repeat`

                        }}></div></SwiperSlide>
                </Swiper>
                </div>
                </div>
               
                <div className="info">
                    <div className="item-cost">
                    <h4>{name}</h4>
                    <p>${price}</p>
                    </div>
                    <div className="size">
                        <p>Size</p> 
                        <DropdownSelection></DropdownSelection>
                    </div>
                    <div className="quantity-cart">
                        <div className="quantity"> <Quantity  handleClick={setCount}></Quantity></div>
                        <div className="button">{ 
                        qvExistsCheck || qvPageExistsCheck ?
                        <CustomButton handleClick={()=>{
                            dispatch(openQVToggle())
                            dispatch(openCartToggle())
                            }
                        } isGoogleSignIn>Go to cart</CustomButton>:
                        <CustomButton handleClick={handleClick}>Add to cart</CustomButton>
                        }</div>
                    
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default QuickView