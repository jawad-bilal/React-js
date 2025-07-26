// import React from 'react'

import Item from "./Item"

const Map = ({ arThings, mappy }) => {
    console.log(arThings, "things")
    console.log(mappy[0],"first index")

    // for(int i=0;i<arThings.size();i++){
    //     cout<< arThings[i];
    // }
    return (
        <>
            <div>List of fruits</div>
            <ul>
                {arThings.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}

            </ul>

            <section>
                <p>Array of objects</p>
                {mappy.length
                ?
                mappy.map((item,k)=>(
                    // <div key={k}>
                    //     <p>Name: {item.name}</p>
                    //     <p>City: {item.city}</p>
                    //     <p>Address: {item.address.line1}</p>
                    //     {/* <p>City: {item.city}</p>
                    //     <p>City: {item.city}</p> */}
                    // </div>
                    <Item item={item} key={k}/>
                ))
                :
                <p>Hello nothing to show</p>
                }
            </section>


        </>
    )
}

export default Map