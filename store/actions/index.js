import membersList from '../../assets/data.json'
import {
  GET_MEMBERS_REQUEST, GET_MEMBERS_SUCCESS, GET_MEMBERS_FAIL
} from './actionTypes'


// Action Creators
export const getMembers = () => dispatch => {
  dispatch(actionRequested(GET_MEMBERS_REQUEST))
  return new Promise((resolve, reject) => {
    // simulate real request to server
    setTimeout(() => {
      resolve({data: membersList, success: true})
    }, 800)
  })
    .then(res => {
      if(res.data.success) {
        dispatch(actionSucceed(GET_MEMBERS_SUCCESS, res.data))
      } else {
        dispatch(actionFailed(GET_MEMBERS_FAIL))
      }
    })
    .catch(err => {
      console.log('getClientsRequest err', err);
      dispatch(actionFailed(GET_MEMBERS_FAIL))
    })
}

export const searchMembers = (term) => dispatch => {
  dispatch(actionRequested(SEARCH_CLIENTS_REQUEST))
  axios
    .get(`${url}/persons/find${tokenString}&term=${term}&start=${start}&limit=${limit}`)
    .then(res => {
      if(res.data.success) {
        dispatch(actionSucceed(SEARCH_CLIENTS_SUCCESS, {data: res.data.data, additional_data: res.data.additional_data,  term}))
      } else {
        dispatch(actionFailed(SEARCH_CLIENTS_FAIL))
      }
    })
    .catch(err => {
      console.log('getClientsRequest err', err);
      dispatch(actionFailed(SEARCH_CLIENTS_FAIL))
    })
}


// Actions
const actionRequested = (type) => ({type})
const actionSucceed = (type, payload) => ({type, payload})
const actionFailed = (type) => ({type})