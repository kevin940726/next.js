import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice'

export default function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div className="row">
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="value">{count}</span>
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="row">
        <input
          className="textbox"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className="button"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className="button async-button"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>

      <style jsx>{`
        .row {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .row:not(:last-child) {
          margin-bottom: 16px;
        }

        .value {
          font-size: 78px;
          padding-left: 16px;
          padding-right: 16px;
          margin-top: 2px;
          font-family: 'Courier New', Courier, monospace;
        }

        .button {
          appearance: none;
          background: none;
          font-size: 32px;
          padding-left: 12px;
          padding-right: 12px;
          outline: none;
          border: 2px solid transparent;
          color: rgb(112, 76, 182);
          padding-bottom: 4px;
          cursor: pointer;
          background-color: rgba(112, 76, 182, 0.1);
          border-radius: 2px;
          transition: all 0.15s;
        }

        .textbox {
          font-size: 32px;
          padding: 2px;
          width: 64px;
          text-align: center;
          margin-right: 8px;
        }

        .button:hover,
        .button:focus {
          border: 2px solid rgba(112, 76, 182, 0.4);
        }

        .button:active {
          background-color: rgba(112, 76, 182, 0.2);
        }

        .async-button {
          position: relative;
          margin-left: 8px;
        }

        .async-button:after {
          content: '';
          background-color: rgba(112, 76, 182, 0.15);
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          opacity: 0;
          transition: width 1s linear, opacity 0.5s ease 1s;
        }

        .async-button:active:after {
          width: 0%;
          opacity: 1;
          transition: 0s;
        }
      `}</style>
    </div>
  )
}
