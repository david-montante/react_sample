import React, { useState } from 'react';
import axios from 'axios';

export default function Page() {

  const [count, setCount] = useState([]);
  const [filter, setFilter] = useState("");

  function handleClick(e) {
    e.preventDefault();
    axios.get(`http://localhost:3333/state?filter=` + filter)
    .then(res => { 
      setCount(res.data)
    })
  }

  function updateFilter(e){
    setFilter(e.target.value)
  }

  return (
    <div>
      <h1>Search a Mexico State</h1>
      <label>
        State:
        <input type="text" name="name" value={filter} onChange={updateFilter}/>
      </label>
      <input type="submit" value="Submit" onClick={handleClick} />
      {count.map((data) => {
          return (
            <li>
              {data.name}
            </li>
          );
        })}
    </div>
  );
}
