import membersList from '../../assets/data.json'
import {
  GET_MEMBERS_REQUEST, GET_MEMBERS_SUCCESS, GET_MEMBERS_FAIL,
  ADD_MEMBER_REQUEST, ADD_MEMBER_SUCCESS, ADD_MEMBER_FAIL,
  REMOVE_MEMBER_REQUEST, REMOVE_MEMBER_SUCCESS, REMOVE_MEMBER_FAIL,
  GET_TEAM_MEMBERS_REQUEST, GET_TEAM_MEMBERS_SUCCESS,
  OPEN_SEARCH_BAR, CLOSE_SEARCH_BAR
} from './actionTypes'

// Action Creators
/** Get Members */
export const getMembers = () => dispatch => {
  dispatch(actionRequested(GET_MEMBERS_REQUEST))
  return new Promise((resolve, reject) => {
    // simulate real request to server
    setTimeout(() => {
      resolve({data: membersList, success: true})
    }, 800)
  })
    .then(res => {
      if(res.success) {
        return dispatch(actionSucceed(GET_MEMBERS_SUCCESS, res.data))
      } else {
        return dispatch(actionFailed(GET_MEMBERS_FAIL))
      }
    })
    .catch(err => {
      console.log('getMembers err', err);
      dispatch(actionFailed(GET_MEMBERS_FAIL))
    })
}
/** Add Member */
export const addMember = (id) => (dispatch, getState) => {
  dispatch(actionRequested(ADD_MEMBER_REQUEST))
  const { members: { teamMemberIds } } = getState()
  return new Promise((resolve) => {
    // simulate real request to server
    setTimeout(() => {
      const newArray = teamMemberIds;
      newArray.push(id)
      localStorage.setItem('teamMembers', JSON.stringify(newArray))
      resolve({data: newArray, success: true})
    }, 1200)
  })
    .then(res => {
      if(res.success) {
        return dispatch(actionSucceed(ADD_MEMBER_SUCCESS, res.data))
      } else {
        return dispatch(actionFailed(ADD_MEMBER_FAIL))
      }
    })
    .catch(err => {
      console.log('addMember err', err);
      dispatch(actionFailed(ADD_MEMBER_FAIL))
    })
}

/** Remove Member */
export const removeMember = (id) => (dispatch, getState) => {
  dispatch(actionRequested(REMOVE_MEMBER_REQUEST))
  const { members: { teamMemberIds } } = getState()
  return new Promise((resolve) => {
    // simulate real request to server
    setTimeout(() => {
      const newArray = [...teamMemberIds];
      const index = teamMemberIds.indexOf(id)
      newArray.splice(index,1)
      localStorage.setItem('teamMembers', JSON.stringify(newArray))
      resolve({data: newArray, success: true})
    }, 900)
  })
    .then(res => {
      if(res.success) {
        return dispatch(actionSucceed(REMOVE_MEMBER_SUCCESS, res.data))
      } else {
        return dispatch(actionFailed(REMOVE_MEMBER_FAIL))
      }
    })
    .catch(err => {
      console.log('removeMember err', err);
      dispatch(actionFailed(REMOVE_MEMBER_FAIL))
    })
}

/** Get Team Member's Ids */
export const getTeamMembers = () => (dispatch) => {
  dispatch(actionRequested(GET_TEAM_MEMBERS_REQUEST))

  return new Promise(resolve => {
    const memberIdsStr = localStorage.getItem('teamMembers')

    console.log('memberIdsStr', memberIdsStr)

    setTimeout(() => {
      if(memberIdsStr && memberIdsStr !== '') {
        const memberIds = JSON.parse(memberIdsStr)
        resolve({data: memberIds, success: true})
      } else {
        resolve({data: [], success: true})
      }
    }, 2000)

  }).then(res => {
    if(res.success) {
      return dispatch(actionSucceed(GET_TEAM_MEMBERS_SUCCESS, res.data))
    }
  })
}

export const openSearchBar = () => actionSucceed(OPEN_SEARCH_BAR)
export const closeSearchBar = () => actionSucceed(CLOSE_SEARCH_BAR)


// Actions
const actionRequested = (type) => ({type})
const actionSucceed = (type, payload) => ({type, payload})
const actionFailed = (type) => ({type})