import React from "react"
import { useSelector } from "react-redux"

const Journal = () => {
  let countValue = useSelector((state) => state)
  // console.log(countValue.counter.value)
  return (
    <div className="max-w-container mx-auto">
      <h1 className="text-3xl font-bold">
        Count value: {countValue.counter.value}
      </h1>
    </div>
  )
}

export default Journal
