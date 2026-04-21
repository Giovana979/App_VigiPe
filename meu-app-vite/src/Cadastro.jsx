import { InputCustom } from "./InputCustom";
import { InputPassWord } from "./InputPassWord";

export function Cadastro({ aoClicarVoltar }) {
    return (
        <>
            {/* Título com duas linhas como no seu desenho */}
            <h2 style={{ textAlign: 'center', color: '#000080', fontFamily: 'Montserrat, sans-serif' }}>
                Bem-Vindo ao<br/>VigiPeçonha!
            </h2>

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