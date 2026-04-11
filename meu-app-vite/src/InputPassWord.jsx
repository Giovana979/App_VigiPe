import { useState} from 'react';

export function InputPassWord({ label, valor, onChange }) {
  const [visivel, setVisivel] = useState(false);
  const toggleVisibilidade = () => {setVisivel(!visivel);};
  return (
    <div className="input-group-password">
      <label>{label}</label>
      <div className="input-with-icon">
        <input type={visivel ? "text" : "password"} 
        placeholder="Digite sua senha"
        value={valor}
        onChange={onChange}/>

        <button type="button" 
        onClick={toggleVisibilidade} 
        className="btn-olhinho"
        >
          {visivel ? "🙈" : "👁️"}
          </button>
        </div>
      </div>
  );
}
