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
    case SEARCH_MEMBERS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case SEARCH_MEMBERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload.data ? action.payload.data : [],
        pagination: action.payload['additional_data'].pagination,
        searchTerm: action.payload.term
      }
    case SEARCH_MEMBERS_FAIL:
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
    case UPDATE_MEMBER_REQUEST:
      return {
          ...state,
          isMEMBERLoading: true
      }
    case UPDATE_MEMBER_SUCCESS:
      return {
          ...state,
          isMEMBERLoading: false,
      }
    case UPDATE_MEMBER_FAIL:
      return {
          ...state,
          isMEMBERLoading: false
      }
    case UPDATE_MEMBER_PICTURE_REQUEST:
      return {
        ...state,
        isMEMBERImgLoading: true
      }
    case UPDATE_MEMBER_PICTURE_SUCCESS:
      return {
        ...state,
        isMEMBERImgLoading: false,
      }
    case UPDATE_MEMBER_PICTURE_FAIL:
      return {
        ...state,
        isMEMBERImgLoading: false
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
    case GET_ORGANIZATIONS_REQUEST:
      return {
        ...state
      }
    case GET_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        organizations: action.payload
      }
    case GET_ORGANIZATIONS_FAIL:
      return {
        ...state
      }
    case GET_MEMBER_DETAILS_REQUEST:
      return {
        ...state,
        isMEMBERLoading: true,
      }
    case GET_MEMBER_DETAILS_SILENT_REQUEST:
      return {
        ...state,
        isMEMBERLoading: false,
      }
    case GET_MEMBER_DETAILS_SUCCESS:
      return {
        ...state,
        isMEMBERLoading: false,
        selectedMEMBER: action.payload,
      }
    case GET_MEMBER_DETAILS_FAIL:
      return {
        ...state,
        isMEMBERLoading: false,
        selectedMEMBER: null
      }
    case OPEN_DETAILS_WINDOW:
      return {
        ...state,
        isDetailsActive: true
      }
    case CLOSE_DETAILS_WINDOW:
      return {
        ...state,
        isDetailsActive: false
      }
    default:
      return state
  }
}

export default membersReducer