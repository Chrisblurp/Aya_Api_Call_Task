import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const People = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
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

          // After fetching the data i store it in a character state.
          setCharacters(response.data.results);

          // Closed the loading page
          setLoading(false);
      }

      // Call the function
      loadPeople();
  }, []);

  // function to handle the click event
  const handleCharacterClick = (character) => {
    setSelectedCharacter(character)
  }
  // details to be returned
const details = <div className="container mt-5">
<h1 className="text-center mb-5">Star Wars Characters</h1>
<div className="row">

  <div className="col-md-4 overlay">
  <img src= "aya\src\assets\image.webp" alt="" class="image"/>
 
    <ul className="list-group">
      {characters.map(character => (
        <li 
          key={character.name} 
          className="list-group-item"
          onClick={() => handleCharacterClick(character)}
        >
          {character.name}
        </li>
      ))}
    </ul>
  </div>
  <div className="col-md-8"> 
  {selectedCharacter ? (
      <div className="card mb-5">
        <div className="card-body">
          <h5 className="card-title">{selectedCharacter.name}</h5>
          <p className="card-text">
            Gender: {selectedCharacter.gender}
          </p>
          <p className="card-text">
            Height: {selectedCharacter.height}
          </p>
        </div>
      </div>
    ) : (
      <p>Click on a character to view details</p>
    )}
  </div>
</div>
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
          






   // const details =   
//   <div>
//   <ul className='col-lg-3 col-md-4 col-sm-6 mb-3'>
//   { characters?.map((character, index) => (
//     <li key={index}>
//       {character.name}
//       <button onClick={(event) => {
//         event.preventDefault();
//         // On click, display the character's name, gender, and height
//         alert(`Name: ${character.name}\nGender: ${character.gender}\nHeight: ${character.height}`);
//       }}>
//         View Details
//       </button>
//     </li>
//   ))}
// </ul> 
// </div>
//   return (
//     
// );