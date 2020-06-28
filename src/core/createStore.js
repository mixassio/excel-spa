export function createStore(rootReduser, initStore = {}) {
  let state = rootReduser({ ...initStore }, { type: '__INIT__'});
  let listeners = [];
  return {
    subscribe(fn) {
      listeners.push(fn)
      return {
        unsubscribe() {
          listeners = listeners.filter(l => l !== fn)
        },
      }
    },
    dispatch(action) {
      state = rootReduser(state, action)
      listeners.forEach(l => l(state))
    },
    getState() {
      return state;
    },
  }
}
