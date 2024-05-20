import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styled from "./Post.module.css";

export function Post() {
  return (
    <article className={styled.post}>
      <header>
        <div className={styled.author}>
          <Avatar src="https://github.com/diego3g.png" />
          <div className={styled.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio" dateTime="2024-05-11 08:13:30">
          Públicado há 1h
        </time>
      </header>
      <div className={styled.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          {" "}
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto </a>
          <a href="#">#nlw </a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styled.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styled.commentList}>
        <Comment />
      </div>
    </article>
  );
}
