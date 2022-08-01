import logo from './logo.svg';
import './App.css';
import ButtonClick from './ButtonClick';
import Counter from './Counter';
import CountDownClock from './CountDownClock';
import { createContext } from 'react';
import Context1 from './Context1';
import Todo from './Todo';
import CurrencyConvertor from './CurrencyConvertor';
import Toggle from './Toggle';
import DelayComp from './DelayComp';

export const data = createContext()

function App() {
  const name = "Sumit"
  return (
    <div className="App">
      <ButtonClick />
      <Counter />
      <CountDownClock />

      <data.Provider value={name}>
        <Context1 />
      </data.Provider>

      <Todo />
      <CurrencyConvertor />

      <Toggle />

      <DelayComp />
    </div>
  );
}

export default App;
