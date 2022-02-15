import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
} from "../redux/features/counter.feature";

let CounterRedux = () => {
  // AGORA IREMOS USAR O STATE GLOBAL
  let dispatch = useDispatch();

  let counterState = useSelector((state) => {
    return state["counter"];
  });

  let { count } = counterState;

  let clickIncrement = () => {
    dispatch(increment());
  };

  let clickDecrement = () => {
    dispatch(decrement());
  };

  let clickIncrementByFive = () => {
    dispatch(incrementBy(5));
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h3">{count}</p>
                <button
                  onClick={clickIncrement}
                  className="btn btn-success m-1"
                >
                  Increment
                </button>
                <button
                  onClick={clickDecrement}
                  className="btn btn-warning m-1"
                >
                  Decrement
                </button>
                <button
                  onClick={clickIncrementByFive}
                  className="btn btn-danger m-1"
                >
                  Increment by 5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CounterRedux;
