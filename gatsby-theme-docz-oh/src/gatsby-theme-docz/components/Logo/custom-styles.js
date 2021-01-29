import styled from '@emotion/styled';

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: ${({width = 75}) =>
    typeof width === 'string' ? width : `${width}px`};
  max-height: 50px;
  margin-right: 1rem;

  @media screen and (max-width: 600px) {
    ~ h5 {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    margin-right: 0.75rem;
  }

  @media screen and (max-width: 500px) {
    width: 125px;
  }
`;