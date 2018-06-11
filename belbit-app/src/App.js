import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
var logo = 'http://logok.org/wp-content/uploads/2016/10/Bitcoin-Logo-640x480.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenus chez Belbit</h1>
        </header>
        <p className="App-intro">
	    ‘Quelques potes sont partis faire du kite et payaient leur bieres avec un pot commun. Les dettes se reglaient en Bitcoin et le reste est historique...’
	    Rejoins notre coopperative et achete des bitcoin avec ta banque de Belgique!
        </p>
      </div>
    );
  }
}

export default App;
