export function InputCustom({ label, valor}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <input type="text" value={valor} />
    </div>
  );
}
