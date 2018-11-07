import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {routerReducer} from 'react-router-redux';
import {reducers} from './reducers/reducers';
import TextInput from "./components/TextInput";

const store = createStore(
    combineReducers({
      index:reducers.index,
      router: routerReducer
    }),
    applyMiddleware(
        createLogger())
);

window.app = {};
app.create = (context, dom) => {
  app.run(dom);
};

app.run = (dom) => {
  ReactDOM.render(
      <Provider store={store}>
        <TextInput/>
      </Provider>,
      dom
  )
};

app.create({},
    document.getElementById('index')
);