import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputCustom } from "./InputCustom";
import { InputPassWord } from "./InputPassWord";
import { Logo } from "./Logo";
import { BotaoLogin } from "./BotaoLogin";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleCadastro = async () => {
    setErro("");
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, telefone, email, senha }),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso! Faça login.");
        navigate("/");
      } else {
        const data = await response.json();
        setErro(data.message || "Erro ao cadastrar");
      }
    } catch (err) {
      setErro("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="container">
      <Logo />
      <h1 className="titulo">Cadastro</h1>
      <InputCustom label="Nome:" valor={nome} onChange={(e) => setNome(e.target.value)} />
      <InputCustom label="Telefone:" valor={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <InputCustom label="Email:" valor={email} onChange={(e) => setEmail(e.target.value)} />
      <InputPassWord label="Senha:" valor={senha} onChange={(e) => setSenha(e.target.value)} />
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <BotaoLogin clicado={handleCadastro} texto="Cadastrar" />
      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Já tem conta? Login</a>
    </div>
  );
}