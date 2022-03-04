import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import logger from 'redux-logger';
import Counter from './components/Counter';
import counter from './reducers';

const middleware = applyMiddleware(logger);
//  1、调用createStore方法创建一个Store对象
const store = createStore(counter, middleware);
const rootL = document.getElementById('root');

const render = () => ReactDOM.render(
    //  2、使用Provider将跟组件包裹,并传入Store对象
    <Provider store={store}>
        <Counter />
    </Provider>,
    rootL
);

render();