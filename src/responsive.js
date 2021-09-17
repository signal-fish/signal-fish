import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 576px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const tabletPro = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};

export const laptop = (props) => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    }
  `;
};

export const laptopPro = (props) => {
  return css`
    @media only screen and (max-width: 1440px) {
      ${props}
    }
  `;
};

export const LargeVersion = (props) => {
  return css`
    @media only screen and (min-width: 1800px) {
      ${props}
    }
  `;
};