import { useState } from "react";
import { Login } from "./Login";
import { Cadastro } from "./Cadastro";
import "./App.css";

export default function App() {
    // Começa sempre na tela de login
    const [telaAtual, setTelaAtual] = useState("login");

    return (
        <main className="container">
            {/* Operador Ternário: Se for login, mostra Login. Senão, mostra Cadastro */}
            {telaAtual === "login" ? (
                <Login aoClicarCadastrar={() => setTelaAtual("cadastro")} />
            ) : (
                <Cadastro aoClicarVoltar={() => setTelaAtual("login")} />
            )}
        </main>
    );
}