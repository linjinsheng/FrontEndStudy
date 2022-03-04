/**
 * @param {Function} reducer reducer
 * @param {any} preloadedState 初始化的state,用的相对较少,一般在服务端渲染的时候使用
 * @param {Function} enhancer 中间件
 */
export default function createStore(reducer, preloadedState, enhancer) {
    //  实现第二个形参选填
    //  只有当第二参数传入的是中间件才会执行下面的代码
    if(typeof preloadedState === 'function' && typeof enhancer === 'undefined'){
        enhancer = preloadedState;
        preloadedState = undefined;
    }

    let currentReducer = reducer;
    let currentState = preloadedState;  //  整个应用所有的state都存储在这个变量里
    let currentListeners = [];          //  订阅传进来的回调函数

    let nextListeners = currentListeners;

    function getState() {
        return currentState;
    }

    function subscribe(listener){
        if(nextListeners === currentListeners) {
            //  浅复制
            //  实际上nextListeners就是currentListeners,避免直接操作currentListeners
            //  因为其他地方会用到currentListeners,从而导致数据不一致
            nextListeners = [...currentListeners];
        }
        nextListeners.push(listener);

        return function unsubscribe() {
            if(nextListeners === currentListeners){
                //  浅复制
                nextListeners = [...currentListeners];
            }

            const index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
        }
    }

    function dispatch(action) {
        currentState = currentReducer(currentState, action);    //  调用reducer来更新数据
        const listeners = (currentListeners = nextListeners);   //  保证当前的listeners是最新的
        for(let i = 0; i < listeners.length; i++){
            listeners[i]();     //  依次执行回调函数
        }
        return action;
    }

    //  手动触发一次dispatch,初始化
    dispatch({type: 'INIT'});

    return {
        getState,
        dispatch,
        subscribe,
    }
}