import React, { ReactNode } from "react";
import { CenterDiv } from "./styles";

type CenterContentProps = {
  horizontal?: boolean;
  vertical?: boolean;
  children: ReactNode;
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
}) => {
  return (
    <CenterDiv vertical={vertical} horizontal={horizontal}>
      {children}
    </CenterDiv>
  );
};
