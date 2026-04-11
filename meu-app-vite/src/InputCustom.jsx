export function InputCustom({ label, valor, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <input type="text" value={valor} onChange={onChange} />
    </div>
  );
}
