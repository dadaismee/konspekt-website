export const mediaQueries = {
  tablet: '820px',
  phone: '450px',
};

export const cssForRombAnimation = (color) => ({
  transform: 'skewX(160deg)',
  padding: '0.25vw',
  margin: '-0.25vw',
  backgroundImage: `linear-gradient(to right, ${color}, ${color})`,
  backgroundSize: '0%',
  backgroundRepeat: 'no-repeat',
});

export const mainShadow = '10px 10px 20px rgba(0, 0, 0, 0.25)';
