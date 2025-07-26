// import React from 'react'
import { useParams } from "react-router-dom"

const Test = () => {
    const {testId} = useParams();
    console.log(testId,"testid")

    
  return (
    <div>Test {testId}</div>
  )
}

export default Test