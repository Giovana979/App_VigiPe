import { Logo } from "./Logo";
import { InputCustom } from "./InputCustom";
import { InputPassWord } from "./InputPassWord";
import { BotaoLogin } from "./BotaoLogin";
import "./Login.css";

export function Login({ aoClicarCadastrar }) {
    return (
        <>
            <Logo />
            <h1>App VigiPeçonha</h1>
            <InputCustom label="Nome do Usuário:" />
            <InputPassWord label="Senha:" />
            <BotaoLogin clicado={() => alert('Login!')} />
            
            {/* Aqui está o pulo do gato! */}
            <a href="#" onClick={(e) => {
                e.preventDefault(); // Evita que a página recarregue
                aoClicarCadastrar(); // Chama a função que vem do App.jsx
            }}>
                Não tem Cadastro?
            </a>
        </>
    );
}