let initState = {
  count: 0
}
let store = createStore(initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.count);
});
/*自增*/
store.changeState({
  count: store.getState().count + 1
});
/*自减*/
store.changeState({
  count: store.getState().count - 1
});
/*我想随便改*/
store.changeState({
  count: 'abc'
});
// ----------------------------------------------------

/*注意：action = {type:'',other:''}, action 必须有一个 type 属性*/
function plan(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}
//----------------------------------------------------------

/*增加一个参数 plan*/
const createStore = function (plan, initState) {
  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function changeState(action) {
    /*请按照我的计划修改 state*/  
    state = plan(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    changeState,
    getState
  }
}
//--------------------------------------------
let initState = {
  count: 0
}
/*把plan函数*/
let store = createStore(plan, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.count);
});
/*自增*/
store.changeState({
  type: 'INCREMENT'
});
/*自减*/
store.changeState({
  type: 'DECREMENT'
});
/*我想随便改 计划外的修改是无效的！*/
store.changeState({
  count: 'abc'
});