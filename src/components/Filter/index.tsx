import React, { useContext } from "react";

import { FilterContext } from "../../contexts/FilterContext";

import { Container, FiltersContainer, FilterButton } from "./styles";

import Img from '../../assets/icon-remove.svg';

export const Filter: React.FC = () => {
  const { filters, removeFilter, clearAllFilters } = useContext(FilterContext);

  function handleRemoveFilter(value: string) {
    removeFilter(value);
  }

  function handleClearAllFilters() {
    clearAllFilters();
  }

  return (
    <Container>
        <FiltersContainer>
          {filters.map((filter, index) => {
            return(
              <FilterButton
                key={index}
                onClick={() => handleRemoveFilter(filter)}>
                <span>{filter}</span>
                <button>
                  <img src={Img} alt='remove icon'/>
                </button>
              </FilterButton>
            )
          })
          }
        </FiltersContainer>

        <button onClick={() => handleClearAllFilters()}>Clear</button>
    </Container>
  )
}