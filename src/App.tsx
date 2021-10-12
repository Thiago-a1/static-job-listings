import React from 'react';

import { FilterProvider } from './contexts/FilterContext';

import { Dashboard } from './components/Dashboard';

import Global from './styles/global';

function App() {
  return (
    <FilterProvider>
      <div className="App">
        <Global />
        <Dashboard />
      </div>
    </FilterProvider>
  );
}

export default App;
