import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Components/Routing';

const App = () => {
  return (
    <div className="overlay">
      <Routing />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
