import {
  GET_HOME_ATTEMP,
  GET_HOME_ATTEMP_SUCCESS,
  GET_HOME_ATTEMP_FAILED,
  SAVE_RATE_FAILED} from '../actions/type';

  const INITIAL_STATE = {
    loading: false,
    error: '',
    data: ''
  };

  export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_HOME_ATTEMP:
        return { ...INITIAL_STATE, loading: true }
    case GET_HOME_ATTEMP_SUCCESS:
        return {
           loading: 'false',
           data: action.payload,
           error: ''
          }
    case GET_HOME_ATTEMP_FAILED:
        return { loading: false, error: 'Somethin went wrong' }
    case SAVE_RATE_FAILED:
        return { ...state, loading: 'false', error: 'something went wrong' }
    default:
      return state;
    }
  };
