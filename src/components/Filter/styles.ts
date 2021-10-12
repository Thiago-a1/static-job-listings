import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 12px 24px;
  margin: -84px 0 64px 0;

  background-color: var(--Tertiary-Background-color);

  border-radius: 6px;

  box-shadow: 0px 4px 8px 6px rgba(91, 164, 164, 0.2);

  button {
    font-weight: 700;

    padding: 6px 6px 4px 6px;
    border: none;
    border-radius: 4px;

    color: var(--Secondary-color);
    background-color: transparent;

    &:hover {
      color: var(--Primary-color);
      background-color: var(--Primary-Background-color);

      text-decoration: underline;
    }
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 12px;

  width: 80%;
`;

export const FilterButton = styled.div`
  font-size: 0.8rem;
  font-weight: 700;

  padding-left: 8px;
  border-radius: 4px;

  background-color: var(--Primary-Background-color);
  color: var(--Primary-color);

  span {
    display: inline-block;

    margin-bottom: 4px;
  }

  button {
    width: 22px;
    height: 20px;

    padding-top: 2px;
    margin-left: 8px;
    border-radius: 0 4px 4px 0;

    background-color: var(--Primary-color);

    &:hover {
      background-color: var(--Tertiary-color);
    }

    img {
      width: 10px;
      height: 10px;
    }
  }
`;