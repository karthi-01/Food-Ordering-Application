import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice";
import useTabSwitch from "../../hooks/useTabSwitch";
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
import { AddressForm } from "../../components/AddressForm";
import { ProductsSummary } from "../../components/ProductsSummary";
import { StripeWrapper } from "../../components/PaymentForm";
import { useEffect, useState } from "react";

const Cart = () => {
    const cart = useSelector(cartProducts);
    const tabs= ['Summary', 'Delivery', 'Payment'];
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');
    const [total,setTotal]= useState(0);
    useEffect(()=>{
        let temptotal = 0;
        cart.map((item)=>{temptotal+=item.price})
        setTotal(temptotal)

    });


    if (!cart || cart.length === 0) {
        return (
            <div className="bg-white p-4 text-black flex justify-center items-center content-center">
                <img src={require("../../assets/images/cart2.png")} alt="cart" style={{height: "500px"}} />
            </div>
        )
    }

    return (
        <div className="bg-white text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
            <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
            <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
                <ProductsSummary />
                <div className= "flex justify-end py-2"
                style={{textAllign: "right", marginRight:"2rem"}} >
                <strong>Subtotal = Rs. {total}</strong>
                </div>
                
                <div className="flex justify-end p-2">
                    <Button variant="dark" className="flex items-center" onClick={()=>handleTabSwitch('Delivery')}><span className="mr-1">Next</span><ArrowRightSvg /></Button>
                </div>
            </div>
            <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
                <AddressForm onTabSwitch={handleTabSwitch}/>
            </div>
            <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
                <div className= "flex justify-end py-2"
                style={{textAllign: "right", marginRight:"2rem"}} >
                Subtotal = Rs. {total}
                </div>
                <div className= "flex justify-end py-2"
                style={{textAllign: "right", marginRight:"2rem"}} >
                Delivery Fee = Rs. 100
                </div>
                <div className= "flex justify-end py-2"
                style={{textAllign: "right", marginRight:"2rem"}} >
                <strong>Total = Rs. {total+100}</strong> 
                </div>

                <StripeWrapper />
                
            </div>
        </div>
    )
}

export default Cart;