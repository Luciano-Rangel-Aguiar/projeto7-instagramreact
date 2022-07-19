import React from "react";
function Post(props) {
  const [curtida, setCurtida] = React.useState(false);
  function foto() {
    if (curtida === false) {
      setCurtida(!curtida);
    }
  }
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.img} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img onClick={foto} src={props.conteudo} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div class="icons">
            <span>
              {curtida ? (
                <ion-icon
                  onClick={() => setCurtida(!curtida)}
                  name="heart"
                ></ion-icon>
              ) : (
                <ion-icon
                  onClick={() => setCurtida(!curtida)}
                  name="heart-outline"
                ></ion-icon>
              )}
            </span>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.curtidasImg} />
          <div class="texto">
            Curtido por <strong>{props.curtidasUsuario}</strong> e
            <strong> outras {props.curtidasNumero} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Posts() {
  let posts = [
    {
      img: "assets/img/meowed.svg",
      usuario: "meowed",
      conteudo: "assets/img/gato-telefone.svg",
      curtidasImg: "assets/img/respondeai.svg",
      curtidasUsuario: "respondeai",
      curtidasNumero: "101.523"
    },
    {
      img: "assets/img/barked.svg",
      usuario: "barked",
      conteudo: "assets/img/dog.svg",
      curtidasImg: "assets/img/adorable_animals.svg",
      curtidasUsuario: "dorable_animals",
      curtidasNumero: "99.159"
    }
  ];
  return (
    <div class="posts">
      {posts.map((item) => (
        <Post
          img={item.img}
          usuario={item.usuario}
          conteudo={item.conteudo}
          curtidasImg={item.curtidasImg}
          curtidasUsuario={item.curtidasUsuario}
          curtidasNumero={item.curtidasNumero}
        />
      ))}
    </div>
  );
}
