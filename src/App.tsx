import React from 'react';
import AppTitle from './components/AppTitle';
import './App.css';
import { CallHistory } from './components/CallHistory';

function App() {
  const history = [
    {
      name: 'Egor',
      date: '25.12',
      duration: '00:10'
    },
    {
      name: 'Ivan',
      date: '24.12',
      duration: '00:11'
    },
    {
      name: 'Konstantin',
      date: '23.12',
      duration: '00:12'
    },
    {
      name: 'Sergey',
      date: '24.12',
      duration: '00:13'
    },
    {
      name: 'Petr',
      date: '25.12',
      duration: '00:14'
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <AppTitle />
      </header>
      <CallHistory history={history} />
    </div>
  );
}

export default App;
