'use client'
import { useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Menu/Footer";
import User from "../components/User";

const Home = () => {

  const [nameUser, setNameUser] = useState ("Cesar");
  return (
    <div>
      <Menu /><br />

      <User name={nameUser}>
          <p>Este é um conteúdo extra fornecido como children.</p>
      </User><br />

      <button onClick={() => setNameUser("Vinicius")}>Alterar</button>

      <h2>Bem vindo Henrique!</h2><br />
      <Footer />
    </div>
  );
}

export default Home;