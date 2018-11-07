import {IndexEvents} from '../constants/Events';

const index = (state = {globalState: {}, message:{}}, action) => {
  switch (action.type) {

    case IndexEvents.REST_INDEX:
      console.log("case IndexEvents.REST_INDEX"); //FIXME DEBUG LOG
      console.log(action); //FIXME DEBUG LOG
    	return Object.assign({}, state, {
        globalState: action.state,
		  	message:null
		});
    default:
      return state;
  }
};

export default index;