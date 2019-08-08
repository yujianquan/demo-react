//state 的拆分和合并

/* counter 自己的 state 和 reducer 写在一起*/
let initState = {
  count: 0
}
function counterReducer(state, action) {
  /*注意：如果 state 没有初始值，那就给他初始值！！*/  
  if (!state) {
      state = initState;
  }
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    default:    
      return state;
  }
}
//我们修改下 createStore 函数，增加一行 dispatch({ type: Symbol() })

const createStore = function (reducer, initState) {
  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }
  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }
  function getState() {
    return state;
  }
  /* 注意！！！只修改了这里，用一个不匹配任何计划的 type，来获取初始值 */
  dispatch({ type: Symbol() })

  return {
    subscribe,
    dispatch,
    getState
  }
}
const reducer = combineReducers({
  counter: counterReducer,
  //...
});
/*这里没有传 initState 哦 */
const store = createStore(reducer);
/*这里看看初始化的 state 是什么*/
console.dir(store.getState());

/** 
 counter:{
    count: 0
  }
*/
  
