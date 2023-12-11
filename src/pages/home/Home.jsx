import React, { useState } from "react"
import Banner from "../../components/home/Banner"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../../slice/counterSlice"
// import { increment, decrement } from "../../slices/counterSlice"

const Home = () => {
  let [count, setCount] = useState(0)

  const data = useSelector((state) => state)
  // console.log(data)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    count++
    setCount(count)
    dispatch(increment(count))
  }
  const handleDecrement = () => {
    count--
    setCount(count)
    dispatch(decrement(count))
  }
  return (
    <>
      <Banner />
      <button onClick={handleIncrement}>Increment</button>
      <h1 className="text-[60px]">{count}</h1>
      <button onClick={handleDecrement}>Increment</button>
    </>
  )
}

export default Home
