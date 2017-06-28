export const PI = 3.1415;

export function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx ** 2 + dy ** 2);
}
