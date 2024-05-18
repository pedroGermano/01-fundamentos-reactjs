import styled from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styled.header}>
      <img src={igniteLogo} alt="Logo ignite feed" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
