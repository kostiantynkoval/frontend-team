import {
  GET_MEMBERS_REQUEST, GET_MEMBERS_SUCCESS, GET_MEMBERS_FAIL,
  SEARCH_MEMBER_REQUEST, SEARCH_MEMBER_SUCCESS, SEARCH_MEMBER_FAIL,
  ADD_MEMBER_REQUEST, ADD_MEMBER_SUCCESS, ADD_MEMBER_FAIL,
  REMOVE_MEMBER_REQUEST, REMOVE_MEMBER_SUCCESS, REMOVE_MEMBER_FAIL,
} from '../actions/actionTypes'

const initialState = {
  list: [],
  searchTerm: null,
  isLoading: false,
}

const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEMBERS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
        searchTerm: null
      }
    case GET_MEMBERS_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case ADD_MEMBER_REQUEST:
      return {
        ...state,
        isMEMBERLoading: true
      }
    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        isMEMBERLoading: false,
      }
    case ADD_MEMBER_FAIL:
      return {
        ...state,
        isMEMBERLoading: false
      }
    case SEARCH_MEMBER_REQUEST:
      return {
        ...state,
        isMEMBERLoading: true
      }
    case SEARCH_MEMBER_SUCCESS:
      return {
        ...state,
        isMEMBERLoading: false,
      }
    case SEARCH_MEMBER_FAIL:
      return {
        ...state,
        isMEMBERLoading: false
      }
    case REMOVE_MEMBER_REQUEST:
      return {
        ...state,
        isMEMBERLoading: true
      }
    case REMOVE_MEMBER_SUCCESS:
      return {
        ...state,
        isMEMBERLoading: false,
      }
    case REMOVE_MEMBER_FAIL:
      return {
        ...state,
        isMEMBERLoading: false
      }
    default:
      return state
  }
}

export default membersReducer