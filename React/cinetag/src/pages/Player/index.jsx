import Banner from "../../components/Banner";
import styles from "./Player.module.css";
import Titulo from "../../components/Titulo/index";
import { useParams } from "react-router-dom";
import NaoEncontrada from "../NaoEncontrada/index";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/DaviPJr/cinetag-api/videos?id=${parametros.id}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(...dados);
      });
  }, []);

  if (!video) {
    return <NaoEncontrada />;
  }
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.Titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;
