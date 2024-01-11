import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

const defaultState = {
  cash: 0,
  exchangedCash: 0,
}

const reducer = (state=defaultState, action) => {
      switch (action.type) {
        case "ADD_CASH":
          return {...state, cash:state.cash + action.payload}

        case "GET_CASH":
          return {...state, cash:state.cash - action.payload}

        case "EXCHANGE_CASH":
          return { ...state, exchangedCash: action.payload / 12400 }

        default:
          return state;

      }

}

const store = createStore(reducer)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


