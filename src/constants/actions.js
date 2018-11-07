
let esc = encodeURIComponent;

export const getState = (type, state, callback) => {
  return function (dispatch) {
    dispatch({type, state});
    return state
  }
};

