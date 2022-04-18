import React from 'react';
import GeneralInfo from './components/generalInfo';
import WorkExp from './components/workExp';
import EducationalExp from './components/eductionalExp';
import './App.css';

const App = ()=> {
  return (
    <div className="app">
      <GeneralInfo />
      <WorkExp />
      <EducationalExp />
    </div>
  );
}

export default App;
