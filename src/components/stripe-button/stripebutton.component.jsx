import React from 'react'
import StripeCheckOut from 'react-stripe-checkout'


const StripeCheckoutButton = ({price,setPaymentstatus,cartItems}) =>{
    const priceForStripe = price*100
    const publishableKey = 'pk_test_51IeiEUSBpnf6BKfq8gLqaeETbj5UJZsh5o0NnEIWjMXSsp8R9ZcW3DsGmKTpmDsSvniPkPXIZXFurIj7dztQo8Gs00ZmAaCisg'

    const onToken = token =>{
        setPaymentstatus(1)
        console.log(token)
    }
    if(cartItems.length>0)
    {return(
        <StripeCheckOut
        label = 'PAY NOW'
        name= 'ApparelQ Ltd.'
        billingAddress
        shippingAddress
        image='https://firebasestorage.googleapis.com/v0/b/apparelq-db.appspot.com/o/tags.svg?alt=media&token=65efdf2a-5f8e-4033-bd1b-088199feadee'
        description={`Your total is $${price}`}
        amount ={priceForStripe}
        panelLabel='PAY NOW'
        token={onToken}
        stripeKey={publishableKey}

        />
    )}
    else{
        return null
    }
}

export default StripeCheckoutButton