/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement,onIncrementAsync,onCreated,onLogin,onLogout }) =>
      <div>
        <button onClick={onIncrementAsync}>
          Increment after 1 second
        </button>
        {' '}
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
        <hr/>
       
       <button onClick={onCreated}>
          点击三次弹出弹窗
        </button>
         <hr/>
             <button onClick={onLogin}>
          登录
        </button>
            <button onClick={onLogout}>
          注销
        </button>
      </div>


Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onCreated:PropTypes.func.isRequired
}

export default Counter
