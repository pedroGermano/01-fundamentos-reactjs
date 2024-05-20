import { PencilLine } from "phosphor-react";
import styled from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styled.sidebar}>
      <img
        className={styled.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="bg"
      />
      <div className={styled.profile}>
        <Avatar
          hasBorder
          src="https://xesque.rocketseat.dev/users/avatar/profile-9232733e-2c34-4200-bcf6-6639d542964d-1628693755984.jpg"
        />
        <strong>Pedro Germano</strong>
        <span>Front-end Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
