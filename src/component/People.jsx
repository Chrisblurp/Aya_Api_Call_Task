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
          "https://swapi.dev/api/people/");

          // After fetching data stored it in posts state.
          setCharacters(response.data.results);

          // Closed the loading page
          setLoading(false);
      }

      // Call the function
      loadPeople();
  }, []);

  const details =   
  <div>
  <ul className='col-lg-3 col-md-4 col-sm-6 mb-3'>
  { characters?.map((character, index) => (
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
</ul> 
</div>
  return (
    <>
    {loading ? (
      <h1>Loading ..</h1>
    ) : 
       details} 
    </>
);
}
    export default People;
          
         
        
//     <div>
//     {loading ? (
//         <h4>Loading...</h4>) :
//         (characters.map((character, indx) =>
        
//             // Presently we only fetch 
//             // name from the API 
//             <h4 className=" key={indx}>{character.name}</h4>)
            
//         )
//     }
// </div>