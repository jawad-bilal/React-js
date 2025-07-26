import { useEffect, useState } from "react";

// import {moduleName} from "react";


function Hello({ name, displaymessage, handleChangeName }) {

    const [first, setFirst] = useState("1");
    // const [second, setSecond] = useState(0);
    const [second, setSecond]= useState(0);

    // let second = 0;

    const changeName=()=>{
        handleChangeName("Ameer");
    }



    useEffect(
        () => { // callback function
            console.log("mounted");
            setFirst("0")
            console.log("updated")

            console.log(second);




            // setSecond(second+1);

            return () => {
                console.log("un mounted")
            }
        },
        [second]   // dependency array
    )

    // useEffect()

    const handleIncrement = () => {
        setSecond(second + 1);
        // second += 1;
    }

    console.log(first)
    return <div>
        <h1>HELLO FROM {name}</h1>
        <h1>hellow {displaymessage()}</h1>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={changeName}>Change name</button>
    </div>
}

const HeLLo = () => {


    return (
        <>
            <p>Hello function</p>
        </>
    )
}
export default Hello;