/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styled from "./Post.module.css";

export function Post(props) {
  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(props.publishedAt);

  return (
    <article className={styled.post}>
      <header>
        <div className={styled.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styled.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title="11 de Maio" dateTime="2024-05-11 08:13:30">
          {publishedDateFormatted}
        </time>
      </header>
      <div className={styled.content}>
        {props.content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
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
