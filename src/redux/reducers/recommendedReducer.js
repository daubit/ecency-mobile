import { SET_RECOMMENDED_USER } from '../constants/constants';

const initialState = {
  recommendedUser: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_RECOMMENDED_USER:
      return {
        recommendedUser: action.payload,
      };
    default:
      return state;
  }
}
