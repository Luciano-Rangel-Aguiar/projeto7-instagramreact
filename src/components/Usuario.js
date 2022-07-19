function User(props) {
  return (
    <div class="usuario">
      <img src={props.img} />
      <div class="texto">
        <strong>{props.usuario}</strong>
        {props.nome}
      </div>
    </div>
  );
}
export default function Usuario() {
  return (
    <User
      img="assets/img/catanacomics.svg"
      usuario="catanacomics"
      nome="Catana"
    />
  );
}
