import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BotaoLogin } from "./BotaoLogin";
import { InputCustom } from "./InputCustom";
import {Logo} from "./Logo";
import { InputPassWord } from "./InputPassWord";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
console.log("API_URL:", API_URL);

export default function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async () => {
    setErro("");
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        alert("Login realizado com sucesso!");
        navigate("/dashboard");
      } else {
        setErro("Email ou senha inválidos");
      }
    } catch (err) {
      setErro("Erro ao conectar com o servidor" + API_URL);
    }
  };

  return (
    <div className="container">
      <Logo />
      <h1 className="titulo">App VigiPeçonha</h1>
      <InputCustom label="Email:" valor={email} onChange={(e) => setEmail(e.target.value)} />
      <InputPassWord label="Senha:" valor={senha} onChange={(e) => setSenha(e.target.value)} />
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <BotaoLogin clicado={handleLogin} />
      <a href="/cadastro">Não tem Cadastro?</a>
    </div>
  );
}
