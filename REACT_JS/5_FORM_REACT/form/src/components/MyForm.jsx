import React from "react";
import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ userName, userEmail }) => {
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name, email, bio, role);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio);

    // validacao
    // envio

    // 7 - Limpar o form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 5 - Envio de formulario */}
      {/* 1 - Criacao de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            onChange={handleName}
            // 6 - controlled input
            value={name || ""}
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>Email:</span>
          <input
            type="text"
            name="email"
            placeholder="Seu e-mail"
            // 4 - Simplificando manipulacao
            onChange={(e) => setEmail(e.target.value)}
            // 6 - controlled input
            value={email || ""}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descricao do usuario"
            onChange={(e) => setBio(e.target.value)}
            value={bio}></textarea>
        </label>
        {/* 9 - Select */}
        <label>
          <span>Funcao</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
