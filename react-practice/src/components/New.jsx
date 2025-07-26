// import React from 'react'

// interface Intro{
//     name: String,
//     age: Number,
//     address:{
//         line1: String,
//         line2: string
//     }
// }

const New = ({intro}) => { // how we use objects 
  return (
    <>
        <p>Name: {intro.name}</p>
        <p>Age: {intro.age}</p>
        <p>Address(1): {intro.address.line1}</p>
        <p>Address(2): {intro.address.line2}</p>
        <p>City : {intro.city}</p>

    </>
  )
}

export default New