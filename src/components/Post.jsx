/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styled from "./Post.module.css";

export function Post(props) {
  const [comments, setComments] = useState(["Post muito bacana"]);

  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(props.publishedAt);

  function handleCreateNewComment(e) {
    e.preventDefault();
    const newCommentText = e.target.comment.value;
    setComments([...comments, newCommentText]);
    e.target.comment.value = "";
  }

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

      <form onSubmit={handleCreateNewComment} className={styled.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea name="comment" placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styled.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
