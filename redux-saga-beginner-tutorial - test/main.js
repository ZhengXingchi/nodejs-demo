import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import createSagaMiddleware  from 'redux-saga'
import rootSaga  from './sagas.js'

import Counter from './Counter'
import reducer from './reducers'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
const action = (type,payload) => store.dispatch({type,payload})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} 
      onCreated={() => action('TODO_CREATED')} 
      onLogin={() => action('LOGIN_REQUEST',{user:'111',password:'222'})} 
      onLogout={() => action('LOGOUT')} 
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
 
