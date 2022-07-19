function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.img} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>
  );
}
export default function Sugestoes() {
  let sugestoes = [
    {
      img: "assets/img/bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razao: "Segue você"
    },
    {
      img: "assets/img/chibirdart.svg",
      nome: "chibirdart",
      razao: "Segue você"
    },
    {
      img: "assets/img/razoesparaacreditar.svg",
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram"
    },
    {
      img: "assets/img/adorable_animals.svg",
      nome: "adorable_animals",
      razao: "Segue você"
    },
    {
      img: "assets/img/smallcutecats.svg",
      nome: "smallcutecats",
      razao: "Segue você"
    }
  ];
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((item) => (
        <Sugestao img={item.img} nome={item.nome} razao={item.razao} />
      ))}
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
