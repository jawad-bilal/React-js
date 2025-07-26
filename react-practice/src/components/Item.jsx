// import React from 'react'

const Item = ({ item }) => {
    return (
        <div>
            <p>Name: {item.name}</p>
            <p>City: {item.city}</p>
            <p>Address(1): {item.address.line1}</p>
            <p>Address(2): {item.address.line2}</p>
            <p>Designation: {item.address.designation}</p>
        </div>
    )
}

export default Item