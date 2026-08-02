//adding a text box and button so the user has a place to type a character’s name

//useState gives React a small memory box that stores the character name as you type

//telling the form to stay on the same page when the Search button is clicked

//takes the name you type, asks the API for matching characters, 
// and prints the response in the browser console

//giving React another memory box to hold the characters returned by the API

//taking each character stored in React’s memory and showing their name on the page

//turning each character name into a simple card with a picture and basic information

import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
    );

    const data = await response.json();

    setCharacters(data.results);
  }

  return (
    <main>
      <h1>Rick and Morty Character Finder</h1>
      <p>Search for characters from the Rick and Morty series.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a character name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      <p>Characters found: {characters.length}</p>

      <section>
        {characters.map((character) => (
          <article key={character.id}>
            <img
              src={character.image}
              alt={character.name}
            />

            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;