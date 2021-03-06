import {
  SET_FEED_POSTS,
  FILTER_SELECTED,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  RESET,
} from '../constants/constants';

const initialState = {
  feedPosts: [],
  posts: [],
  loading: false,
  selectedFilterValue: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FEED_POSTS:
      return {
        ...state,
        feedPosts: action.payload,
        posts: action.payload,
      };
    case FILTER_SELECTED: {
      return {
        ...state,
        selectedFilterValue: action.payload,
      };
    }
    case FETCH_POSTS: {
      return {
        ...state,
        loading: true,
        feedPosts: null,
        posts: null,
      };
    }
    case FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        feedPosts: action.payload,
        posts: action.payload,
      };
    }
    case RESET: {
      return initialState;
    }
    default:
      return state;
  }
}
