import { useState } from 'react';
import Hello from './components/Hello'
import New from './components/New';
import Map from './components/Map';
import Item from './components/Item';

const Home = () => {
  const [showHello, setShowHello] = useState(true);
  const [name, setName] = useState("JAWAD BILAL S/O KHADAM HUSSAIN")
  function displaymessage() {
    return "wo ha ha ha ha"
  }
  const toggleHello = () => {
    setShowHello(!showHello);
  }

  const handleChangeName = (n) => {
    setName(n);
  }

  const obj = {
    name: "Ameer Hamza",
    age: 21,
    city: "Lahore",
    designation: "Lead Software Engineer",
    address: {
      line1: "first address",
      line2: "second address"
    }
  }

  const arThings = [
    "Apple",
    "Mango",
    "orange",
    "banana",
    "grapes",

  ]

  const mapping = [
    {
      name: "Ameer Hamza",
      age: 21,
      city: "Lahore",
      designation: "Lead Software Engineer",
      address: {
        line1: "first address",
        line2: "second address"
      }

    },
    {
      name: "Jawad bilal",
      age: 21,
      city: "Lahore",
      designation: "Jr. Engineer",
      address: {
        line1: "first address",
        line2: "second address"
      }

    },
  ]

  return (
    <div className="App">
      <button onClick={toggleHello}>Toggle hello</button>
      {showHello && <Hello name={name} displaymessage={displaymessage} handleChangeName={handleChangeName} />}
      <New intro={obj} />
      <Map arThings={arThings} mappy={mapping} />
      <Item item={mapping[0]}/>
    </div>
  )
}

export default Home;
