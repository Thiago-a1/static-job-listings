import React, { useContext } from "react";

import { FilterContext } from "../../contexts/FilterContext";

import { Filter } from "../Filter";
import { Card } from "../Card";

import data from '../../services/data.json';

import { Container } from "./styles";

export const Dashboard = () => {
  const { filters } = useContext(FilterContext);

  return (
    <Container>
      {filters.length > 0 && <Filter />}
      
      {data.filter(function (data) {
        const list = [data.role, data.level, ...data.languages, ...data.tools];

        if (list.length > 0) {
          return filters.every((item) => list.includes(item))
        }

        return data;
        }).map((data) => {
        return(
        <Card 
          key={data.id}
          company={data.company}
          logo={data.logo}
          newCard={data.new}
          featured={data.featured}
          position={data.position}
          role={data.role}
          level={data.level}
          postedAt={data.postedAt}
          contract={data.contract}
          location={data.location}
          languages={data.languages}
          tools={data.tools}
        />
        )
      })}
    </Container>
  )
}