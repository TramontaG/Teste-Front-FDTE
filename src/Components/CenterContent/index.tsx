import React, { ReactNode } from "react";
import { CenterDiv } from "./styles";
import { CSSProperties } from "styled-components";

type CenterContentProps = {
  horizontal?: boolean;
  vertical?: boolean;
  children: ReactNode;
  style?: CSSProperties;
};

/**
 * Just a simple Div that stretches to fill the container and centers its
 * children
 * @param param0
 * @returns
 */
export const CenterContent: React.FC<CenterContentProps> = ({
  children,
  horizontal = true,
  vertical = true,
  style,
}) => {
  return (
    <CenterDiv vertical={vertical} horizontal={horizontal} style={style}>
      {children}
    </CenterDiv>
  );
};
