import { createContext, ReactNode, useState } from "react";

interface FilterProviderProps {
  children: ReactNode;
}

interface FilterContextData {
  filters: string[];
  addFilter: (value: string) => void;
  removeFilter: (value: string) => void;
  clearAllFilters: () => void;
}

export const FilterContext = createContext<FilterContextData>({} as FilterContextData);

export function FilterProvider ({children}: FilterProviderProps) {
  const [filters, setFilters] = useState<string[]>([]);

  function addFilter (value: string) {
    const filter = filters.find((content) => content === value);

    if (!filter) {
      setFilters([...filters, value]);
    }
  }

  function removeFilter (value: string) {
    const list = filters;

    const filterIndex = filters.indexOf(value);

    list.splice(filterIndex, 1);

    setFilters([...list]);
  }

  function clearAllFilters () {
    setFilters([]);
  }
  
  return (
    <FilterContext.Provider 
      value={{
        filters,
        addFilter,
        removeFilter,
        clearAllFilters
      }}>
      {children}
    </FilterContext.Provider>
  )
}