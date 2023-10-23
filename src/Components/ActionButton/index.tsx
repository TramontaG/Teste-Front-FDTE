import React from "react";
import { StyledActionButton } from "./styles";

type ActionButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export const ActionButton = (props: ActionButtonProps) => {
  return <StyledActionButton {...props} />;
};
