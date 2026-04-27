import { InputCustom } from "./InputCustom";
import { InputPassWord } from "./InputPassWord";
import "./Cadastro.css";


export function Cadastro({ aoClicarVoltar }) {
    return (
        <>
            
            <h2>Bem-Vindo ao<br/>VigiPeçonha!</h2>

            {/* Reutilizando seus componentes brilhantemente! */}
            <InputCustom label="Nome:" />
            <InputCustom label="Email:" />
            <InputCustom label="Telefone:" />
            <InputPassWord label="Senha:" />
            <InputCustom label="Tipo de Usuário:" />

            <button style={{ marginTop: '20px' }}>CONTINUE</button>

            <a href="#" onClick={(e) => {
                e.preventDefault();
                aoClicarVoltar();
            }} style={{ marginTop: '15px' }}>
                Já tenho uma conta
            </a>
        </>
    );
}