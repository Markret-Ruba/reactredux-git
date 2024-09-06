import '../App.css'
import { useDispatch } from 'react-redux'
import { addtoCart } from './CartSlice'

function Product  ({ id ,title,image}) {
  const dispatch = useDispatch()
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="" className='w-100'/>
      <br/>
      <button className='btn btn-warning' onClick={() => dispatch(addtoCart({id,title,image}))}>Add to cart</button>
    </div>
  )
}

export default Product
