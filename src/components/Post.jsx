/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styled from "./Post.module.css";

export function Post(props) {
  const [comments, setComments] = useState(["Post muito bacana"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(props.publishedAt);

  function handleCreateNewComment(e) {
    e.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styled.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styled.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
