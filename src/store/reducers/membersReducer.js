import {
  GET_MEMBERS_REQUEST, GET_MEMBERS_SUCCESS, GET_MEMBERS_FAIL,
  GET_TEAM_MEMBERS_REQUEST, GET_TEAM_MEMBERS_SUCCESS, GET_TEAM_MEMBERS_FAIL,
  SEARCH_MEMBER_REQUEST, SEARCH_MEMBER_SUCCESS, SEARCH_MEMBER_FAIL,
  ADD_MEMBER_REQUEST, ADD_MEMBER_SUCCESS, ADD_MEMBER_FAIL,
  REMOVE_MEMBER_REQUEST, REMOVE_MEMBER_SUCCESS, REMOVE_MEMBER_FAIL,
  OPEN_SEARCH_BAR, CLOSE_SEARCH_BAR
} from '../actions/actionTypes'

const initialState = {
  list: [],
  searchTerm: null,
  isLoading: false,
  teamMemberIds: [],
  isSearchBarOpened: false
}

const membersReducer = (state = initialState, action) => {
  console.log(state, action)
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
    case GET_TEAM_MEMBERS_REQUEST:
      return {
        ...state,
        //isLoading: true
      }
    case GET_TEAM_MEMBERS_SUCCESS:
      return {
        ...state,
        //isLoading: false,
        teamMemberIds: action.payload
      }
    case GET_TEAM_MEMBERS_FAIL:
      return {
        ...state,
        //isLoading: false
      }
    case ADD_MEMBER_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        teamMemberIds: action.payload
      }
    case ADD_MEMBER_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case SEARCH_MEMBER_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case SEARCH_MEMBER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case SEARCH_MEMBER_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case REMOVE_MEMBER_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case REMOVE_MEMBER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        teamMemberIds: action.payload
      }
    case REMOVE_MEMBER_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case OPEN_SEARCH_BAR:
      return {
        ...state,
        isSearchBarOpened: true
      }
    case CLOSE_SEARCH_BAR:
      return {
        ...state,
        isSearchBarOpened: false
      }
    default:
      return state
  }
}

export default membersReducer