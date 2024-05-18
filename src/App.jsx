import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Pedro Germano"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi 
        nostrum quam temporibus nesciunt totam, optio sint, quos consequuntur quisquam ducimus a, 
        doloremque deleniti omnis. Distinctio incidunt magni est quas beatae?"
      />
      <Post author="Germano" content="teste teste" />
    </div>
  );
}
