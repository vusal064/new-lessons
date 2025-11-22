 function Profile({ name, age }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid red",
        paddingLeft: "10px",
        margin: "10px",
        width: "200px"
      }}
    >
      <h3>{name}</h3>
      <p>Yas: {age}</p>
    </div>
  );
}
