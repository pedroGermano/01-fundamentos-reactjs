/* eslint-disable react/prop-types */
import styled from "./Avatar.module.css";
export function Avatar(props) {
  return (
    <img
      className={props.hasBorder ? styled.avatarWhitBorder : styled.avatar}
      src={props.src}
    />
  );
}
