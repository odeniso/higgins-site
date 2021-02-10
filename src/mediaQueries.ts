const getMediaQ = (minPixelWidth: number) =>
  `@media (min-width: ${minPixelWidth}px)`;

export const mediaQs = {
  isMinSmall: getMediaQ(360),
  isMinLarge: getMediaQ(1024),
  isMinHuge: getMediaQ(1700),
};
