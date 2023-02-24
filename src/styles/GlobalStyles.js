export const mediaQueries = {
  tablet: "820px",
  phone: "450px",
};

export const cssForRombAnimation = (color) => ({
  padding: "0.5vw",
  margin: "-0.5vw",
  transform: "skewX(160deg)",
  backgroundImage: `linear-gradient(to right, ${color}, ${color})`,
  backgroundSize: "0%",
  backgroundRepeat: "no-repeat",
});

export const mainShadow = "5px 20px 40px rgba(0, 0, 0, 0.25)";
