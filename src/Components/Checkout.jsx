import { useDispatch, useSelector } from "react-redux"
import { removefromCart } from "./CartSlice"

function Checkout ()  {
    const cartItems=useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
  return (
    <div>
       <h2>Checkout</h2>
       {
        cartItems.map(item =>{
            return(
                <div className="d-flex">
                    <img src={item.image} className="c-image" alt =""/>
                    <div>
                        <h4>{item.title}</h4>
                        <button className="btn btn-warning btn-sm"onClick={()=>dispatch(removefromCart({ id: item.id}))}>Remove</button>
                    </div>
                </div>
            )
        })
       }
    </div>
  )
}

export default Checkout
