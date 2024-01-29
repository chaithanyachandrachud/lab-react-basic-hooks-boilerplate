import React from 'react';
import './App.css';
import Context from './components/context.jsx';
import Content from './components/content.jsx';

function App() {
  return (
    <Context>
      <Content />
    </Context>
  );
}

export default App;