import { CSSProperties } from "styled-components";
import Colors from "src/StyleGuide/colors.json";

export const BackgroundStyle: CSSProperties = {
  background: `linear-gradient(0.25turn, ${Colors.primary.default}, ${Colors.primary.transparent})`,
};
