import React, { useState } from "react";

function App() {
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  const fetchCharacter = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setImage(data.image);
      setNome(data.name);
      setStatus(data.status);
      setSpecies(data.species);
      setGender(data.gender);
    } catch {
      alert("Algo deu errado! Tente outro ID.");
    }
  };

  return (
    <div className="main">
      <h1>{nome}</h1>
      <img src={image} alt={nome} className="imagemPersonagem"/>
      <div className="info">
      <p>Status: {status}</p>
      <p>Especie: {species}</p>
      <p>Gênero: {gender}</p>
      </div>
      <div className="container">
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID"
        className="form-control"
      />
      <button class="btn btn-success" onClick={fetchCharacter}><i class="fa fa-search"></i></button>
      </div>
    </div>
  );
}

export default App;