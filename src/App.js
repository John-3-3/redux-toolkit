import React, { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { CartContainer } from './components/CartContainer'
import {useDispatch, useSelector} from 'react-redux'
import { calculateTotals } from './redux/features/cart'
import Modal from './components/Modal'

export default function App() {

  const {cartItems} = useSelector((state)=>state.cart)
  const {isOpen} = useSelector((state) => state.modal)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <div>
      { isOpen && <Modal/> }
      
      <Navbar/>
      <CartContainer/>
    </div>
  )
}

