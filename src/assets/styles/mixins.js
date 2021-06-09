export function getvw(value) {
  const vwContext = 1920 * 0.01;
  const newValue = value / vwContext;

  return `
    ${newValue}vw
  `;
}
export function getvh(value) {
  const vwContext = 1080 * 0.01;
  const newValue = value / vwContext;

  return `
    ${newValue}vh
  `;
}
