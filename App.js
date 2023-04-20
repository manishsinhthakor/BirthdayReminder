import { useState } from "react";
import { data } from "./Birthday";
function App() {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    let newperson = people.filter((person) => person.id !== id)
    setPeople(newperson)
  }
  return (
    <>
      <h3 style={{ backgroundColor: "skyblue", color: "navy", fontFamily: "cursive", textAlign: "center", borderRadius: "50px" }}>
        You Have {people.length} Birthday's Today</h3>
      {people.map((person) => {
        const { id, name, image, age, city } = person
        return (
          <div className="card">
            <div className="container">

              <img src={image} alt={name} />
              <ul style={{ listStyle: "none", fontSize: "22px" }}>
                <li>{name}</li>
                <li>{age}</li>
                <li>{city}</li>
              </ul>
              <button className="btn" onClick={() => removePerson(id)}>DISMISS</button>
            </div>
          </div>
        )
      })}
    </>
  )
} export default App;