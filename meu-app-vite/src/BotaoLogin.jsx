export function BotaoLogin({ clicado, texto }) {
  return <button className="btn-login" onClick={clicado}>{texto || "LOGIN"}</button>;
}
