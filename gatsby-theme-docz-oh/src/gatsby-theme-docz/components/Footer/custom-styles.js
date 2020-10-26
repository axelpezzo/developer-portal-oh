import styled from '@emotion/styled';
import {breakpoints} from 'gatsby-theme-docz/src/theme/breakpoints';

export const Container = styled.div`
  margin-top: 4rem;
`;

export const Navigation = styled.div`
  border-top: solid 1px ${({theme}) => theme.colors.border};
  padding: 2rem 0;

  .row {
    margin: 0 -1rem;
    display: flex;
    justify-content: space-between;

    > div {
      width: 100%;
      padding: 0 1rem;
      margin-bottom: 1rem;
    }
  }

  .cta {
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 50px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 10px 25px;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    text-decoration: none;
    transition: all 0.15s ease;
    color: #fff;
    line-height: 1.4;

    .path {
      font-size: 0.9rem;
      color: #fff;
    }
    .name {
      font-size: 1.1rem;
      font-weight: bold;
      color: #fff;
      transition: all 0.15s ease;
    }
  }

  .prev {
    text-align: right;
  }
  .next {
    text-align: left;
  }

  .icon {
    padding: 0 2px;
    font-size: 3rem;
    line-height: 1;
    margin-top: -0.5rem;
  }

  @media screen and (max-width: ${breakpoints.tablet}px) {
    .row {
      display: block;
    }
  }
`;

export const Updated = styled.div`
  padding: 1.25rem 0;
  color: ${({theme}) => theme.colors.grayLighter};
  font-weight: 500;
  font-size: 0.9rem;
  border-top: solid 1px ${({theme}) => theme.colors.border};
`;
