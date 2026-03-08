import { BotaoLogin } from "./BotaoLogin";
import { InputCustom } from "./InputCustom";
import {Logo} from "./Logo";
import { InputPassWord } from "./InputPassWord";

export default function App() {
  const handleLogin = () => {
    alert("Tentando fazer login...");
  };
  return (
    <div className="container">
      <Logo />
      <h1 className="titulo">App VigiPeçonha</h1>
      <InputCustom label="Nome do Usuário:" />
      <InputPassWord label="Senha:" />
      <BotaoLogin clicado={handleLogin} />
      <a href="#">Não tem Cadastro?</a>
    </div>
  );
}
