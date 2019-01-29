import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import ClickerLayoutDark from './components/ClickerLayoutDark';
import ClickerCount from './components/ClickerCount';
import PrimaryButton from './components/PrimaryButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter>
          {([count,updateCount]) => {
            return (
              <ClickerLayoutDark>
                <ClickerCount
                  onClick={() => updateCount(count+1)}
                >
                  {count}
                </ClickerCount>
                <PrimaryButton onClick={() => updateCount(0)}>Reset</PrimaryButton>
              </ClickerLayoutDark>
            )
          }}
        </Counter>
      </div>
    );
  }
}

export default App;
