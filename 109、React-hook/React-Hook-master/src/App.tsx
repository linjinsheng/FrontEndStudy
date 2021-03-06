import React from "react";
import "./App.less";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import {
  UseState,
  UseEffect,
  UseContext,
  UseReducer,
  UseMemo,
  UseRef,
  WaterMark
} from "./components";

const App = () => {
  // WaterMark({ content: "baby张" });

  return (
    <BrowserRouter>
      {/**此处无关紧要 */}
      <div className="title">
        React Hook,10种hook Demo实例
      </div>
      <ul className="router">
        <li>
          <Link to="/useState">useState </Link>
        </li>
        <li>
          <Link to="/useEffect">useEffect-useLayoutEffect </Link>
        </li>
        <li>
          <Link to="/useMemo">useMemo-useCallback </Link>
        </li>
        <li>
          <Link to="/useRef">useRef-useImperativeHandle </Link>
        </li>
        <li>
          <Link to="/useContext">useContext </Link>
        </li>
        <li>
          <Link to="/useReducer">useReducer </Link>
        </li>
      </ul>
      <div className="content">
        <Route path="/" exact render={() => <Redirect to="/useState" />} />
        <Route path="/useState" exact component={UseState} />
        <Route path="/useEffect" exact component={UseEffect} />
        <Route path="/useMemo" exact component={UseMemo} />
        <Route path="/useRef" exact component={UseRef} />
        <Route path="/useContext" exact component={UseContext} />
        <Route path="/useReducer" exact component={UseReducer} />
      </div>
    </BrowserRouter>
  );
};

export default App;
