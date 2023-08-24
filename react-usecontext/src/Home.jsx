import React, {useContext, useEffect} from 'react'
import { cartContext } from './Context'

function Home() {
  const {price, setPrice,cart, setCart,quantity, setQuantity} = useContext(cartContext);
  
  const handleQuantity = () =>{
    let temp2 = 0;
    cart.map((item)=>(
      temp2 += item.quantity
    ))
    setQuantity(temp2);
  }

  const handlePrice =()=>{
    let temp = 0;
    cart.map((item)=>(
      temp += item.price * item.quantity
    ))
    setPrice(temp);
  }

  useEffect(()=>{
    handlePrice();
    handleQuantity();
  })


  const handleChange =(item,op)=>{
    let ind = cart.indexOf(item);
    const tempArr = cart;
    tempArr[ind].quantity += op;

    if (tempArr[ind].quantity === -1)
       tempArr[ind].quantity = 0;
      setCart([...tempArr])
  }


  const handleRemove = (id) =>{
    const arr = cart.filter((item)=>item.id !== id);
    setCart(arr);
  }
  
  
  return (
    <>
      {
        cart.map((item)=>{
          return(
            <>
            <div className="container text-center">
              <div className='row'>
                <div className="col" key={item.id}>
            
                    <div className="card mt-4 mb-5">
                      
                      <div className="card-body ">
                      <img src={item.thumbnail} alt="..."/>
                        <h1 className="card-title mt-2">{item.title}</h1>
                        <h6 className="card-text">{item.description}</h6>
                        <div>
                          <button className='btn btn-dark m-2' onClick={()=>handleChange(item, -1)}>-</button>
                          <button className='btn btn-dark btn-lg m-2'>{item.quantity}</button>
                          <button className='btn btn-dark m-2' onClick={()=>handleChange(item, +1)}>+</button>
                        </div>
                        <div>
                          <h5>Price: ${item.price*item.quantity}</h5>
                          <button className='btn btn-danger btn-lg mt-2 pl-lg-5 pr-lg-5' onClick={()=>handleRemove(item.id)}>Remove</button>
                        </div>
                      </div>  
                    </div>  

                </div> 
              </div>
            </div>
            </>
          )
        })
      }
      <div className='bg-light p-4 mt-3 text-center footer'>
        <span className='font-weight-bolder'>Total Price of Your Cart -</span>
        <span> ${price}</span>
        <div>
          <span className='font-weight-bolder'>Total Quantity -</span>
          <span> {quantity}</span>
        </div>
      </div>
    </>
  )
}

export default Home



