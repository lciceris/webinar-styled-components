export function buttonStyleNormal(bg, border, color) {
  return `
    background-color: ${bg};
    border: 1px solid ${border};
    color: ${color};

    &:hover,
    &:focus {
      opacity: .8;
    }

    &:focus {
      box-shadow: 0 0 4px 0 ${bg};
    }
   `
}