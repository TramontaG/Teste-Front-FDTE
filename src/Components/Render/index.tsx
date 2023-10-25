import { PropsWithChildren } from "react";

type RenderProps = PropsWithChildren & {
  when: boolean | (() => boolean);
};

export const Render = ({ when, children }: RenderProps) => {
  const shouldRender = typeof when === "boolean" ? when : when();

  if (shouldRender) {
    return <>{children}</>;
  } else {
    return null;
  }
};
