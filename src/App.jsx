import { useState } from "react";
import { puppyList } from "./data.js";
import Puppy from "./components/Puppy.jsx"

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  console.log("puppyList: ", puppyList);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return <p onClick={()=>{setFeatPupId(puppy.id)}}
key={puppy.id}>{puppy.name}</p>;
      })} 
      
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      
      < Puppy puppyName="Zack" /> 

    </div>
  );
}

export default App;
