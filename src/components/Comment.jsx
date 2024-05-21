/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import styled from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment(props) {
  return (
    <div className={styled.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <div className={styled.commentBox}>
        <div className={styled.commentContent}>
          <header>
            <div className={styled.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio" dateTime="2024-05-11 08:13:30">
                Públicado há 1h
              </time>
            </div>
            <button title="Deletar">
              <Trash size={20} />
            </button>
          </header>
          <p>{props.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
