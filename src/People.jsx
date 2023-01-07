import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const People = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
   
    useEffect(() => {
      const loadPeople = async () => {

          // Till the data is fetch using API 
          // the Loading page will show.
          setLoading(true);

          // Await make wait until that 
          // promise settles and return its result
          const response = await axios.get(
          "https://swapi.dev/api/people/:id/");

          // After fetching data stored it in posts state.
          setCharacters(response.data);

          // Closed the loading page
          setLoading(false);
      }

      // Call the function
      loadPeople();
  }, []);
console.log(characters);
  return (
    <>
        <div className="App">
            {loading ? (
                <h4>Loading...</h4>) :
                ( characters.map((item, idx) =>
                
                    // Presently we only fetch 
                    // name from the API 
                    <h4 className="col-lg-3 col-md-4 col-sm-6 mb-3" key={idx}>{item.name}</h4>)
                    
                )
            }
        </div>
    </>
);
}
    export default People;
          
          /* <ul>
            {characters?.map((character, index) => (
              <li key={index}>
                {character.name}
                <button onClick={(event) => {
                  event.preventDefault();
                  // On click, display the character's name, gender, and height
                  alert(`Name: ${character.name}\nGender: ${character.gender}\nHeight: ${character.height}`);
                }}>
                  View Details
                </button>
              </li>
            ))}
          </ul> */
        
       