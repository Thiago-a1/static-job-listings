import styled, { css } from "styled-components";

interface CardProps {
  featured: boolean;
}

export const Container = styled.div<CardProps>`
  padding: 0 16px 1px 16px;
  margin: 48px auto;

  border-radius: 8px;
  
  ${props => props.featured && css`
    border-left: 6px solid var(--Primary-color);
  `}

  background-color: var(--Tertiary-Background-color);

  box-shadow: 0px 4px 8px 6px rgba(91, 164, 164, 0.2);

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 48px;
    height: 48px;

    margin-top: -24px;
  }

  @media (min-width: 1000px) {
    flex-direction: row;

    img {
      width: 96px;
      height: 96px;

      margin: auto 16px;
    }
  }
`;

export const Infos = styled.div`
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div {
    margin: 12px 0;

    h2 {
      font-size: 0.8rem;

      margin-right: 12px;
      color: var(--Primary-color);
    }

    span {
      font-size: 0.8rem;
      font-weight: 700;

      padding: 6px 6px 4px 6px;
      margin-left: 8px;
      border-radius: 12px;

      color: var(--Tertiary-Background-color);
    }
  }

  div + h1{
    font-size: 1rem;

    cursor: pointer;

    :hover {
      color: var(--Primary-color);
    }
  }

  h1 + div {
    border-bottom: 1px solid var(--Secondary-color);
    padding-bottom: 16px;

    h4 {
      font-size: 0.9rem;
      font-weight: 500;

      color: var(--Secondary-color);
    }

    .point {
      font-size: 1rem;

      padding: 0;
      margin: -8px 8px 0 8px;

      color: var(--Secondary-color);
    }

    @media (min-width: 680px) {
      border: none;
    }
  }

  @media (min-width: 1000px) {
    width: 560px;

    padding-top: 12px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  row-gap: 16px;

  width: 90%;

  margin: 8px 0 16px 0;

  @media (min-width: 1000px) {
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  font-weight: 700;

  margin-right: 12px;
  padding: 6px 6px 4px 6px;
  border-radius: 4px;
  border: none;

  color: var(--Primary-color);
  background-color: var(--Primary-Background-color);

  &:hover {
    color: var(--Primary-Background-color);
    background-color: var(--Primary-color);
  }
`;