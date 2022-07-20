import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import UseStateDemo from './UseStateDemo';
// import UseEffectDemo from './UseEffectDemo';
// import UseContextDemo from './pages/UseContextDemo';
// import UseReducerDemo from './pages/UseReducerDemo';
// import UseRefDemo from './pages/UseRefDemo';
// import UseCallbackDemo from './pages/UseCallbackDemo';
// import UseMeMoDemo from './pages/UseMeMoDemo';
import UseLayoutEffectDemo from './pages/UseLayoutEffectDemo';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseStateDemo /> */}
    {/* <UseEffectDemo /> */}
    {/* <UseContextDemo /> */}
    {/* <UseReducerDemo /> */}
    {/* <UseRefDemo /> */}
    {/* <UseCallbackDemo /> */}
    {/* <UseMeMoDemo /> */}
    <UseLayoutEffectDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
