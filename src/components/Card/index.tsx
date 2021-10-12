import { useContext } from "react";

import { FilterContext } from "../../contexts/FilterContext";

import { Container, InfosContainer, Infos, ButtonsContainer, Button } from "./styles";

interface CardProps {
  company: string,
  logo: string,
  newCard: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[]
}

export const Card = ({  
  company, 
  logo, 
  newCard, 
  featured, 
  position, 
  role, 
  level,
  postedAt, 
  contract, 
  location,
  languages, 
  tools }: CardProps) => {
  const { addFilter } = useContext(FilterContext);
  const buttonContent = [role, level, ...languages, ...tools]

  function handleButtonFilter (value: string) {
    addFilter(value);
  }

  return (
    <Container featured={featured}>
      <InfosContainer>
        <img src={logo} alt={company} />
        <Infos>
          <div>
            <h2>{company}</h2>
            {newCard && 
              <span
                style={{ backgroundColor: 'var(--Primary-color)' }}>
                NEW!
              </span>
            }
            {featured && 
              <span 
                style={{ backgroundColor: 'var(--Tertiary-color)' }}>
                FEATURED
              </span>
            }
          </div>
          <h1>{position}</h1>
          <div>
            <h4>{postedAt}</h4>
            <span className="point" >.</span>
            <h4>{contract}</h4>
            <span className="point" >.</span>
            <h4>{location}</h4>
          </div>
        </Infos>
      </InfosContainer>

      <ButtonsContainer>
        {buttonContent.map((content, index) => {
          return (
            <Button 
              key={index}
              onClick={() => handleButtonFilter(content)}>
              {content}
            </Button>
          )
        })}
      </ButtonsContainer>
    </Container>
  )
}