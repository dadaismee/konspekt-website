import { colors } from "./ColorStyles";

// media quieries
export const mediaQueries = {
  tablet: "820px",
  phone: "450px",
};

export const cssForRombAnimation = {
  transform: "skewX(160deg)",
  backgroundImage: `linear-gradient(
      to right,
      ${colors.yellow100} 100%,
      ${colors.yellow100} 100%,
    )`,
  backgroundRepeat: "no-repeat",
  // animationDelay: "0.25s",
};

export const mainShadow = "5px 20px 40px rgba(0, 0, 0, 0.25)";
