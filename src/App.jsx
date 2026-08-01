//adding a text box and button so the user has a place to type a character’s name

//useState gives React a small memory box that stores the character name as you type

//telling the form to stay on the same page when the Search button is clicked

//takes the name you type, asks the API for matching characters, 
// and prints the response in the browser console
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
    );

    const data = await response.json();

    console.log(data);
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

      <p>You typed: {searchTerm}</p>
    </main>
  );
}

export default App;