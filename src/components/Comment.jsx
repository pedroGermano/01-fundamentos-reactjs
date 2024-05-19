import { ThumbsUp, Trash } from "phosphor-react";
import styled from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styled.comment}>
      <img src="https://github.com/diego3g.png" alt="avatar" />

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
          <p>Muito bom Devon, parabéns!! 👏👏</p>
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
