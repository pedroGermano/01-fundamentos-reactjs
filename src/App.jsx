import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";
import styled from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styled.wrapper}>
        <aside>Sidebar</aside>
        <main>
          <Post
            author="Pedro Germano"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Odit reprehenderit velit perferendis aperiam ullam, eveniet facere
            qui minima nihil pariatur ut maiores at repudiandae, earum provident quis placeat libero minus!"
          />
        </main>
      </div>
    </div>
  );
}
