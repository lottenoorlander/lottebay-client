import request from "superagent";

const baseUrl = "http://localhost:4000";

export default function fetchAd(id) {
  return function thunk(dispatch, getState) {
    request(`${baseUrl}/advertisement/${id}`)
      .then(response => {
        return dispatch(addFetched(response.body));
      })
      .catch(console.error);
  };
}

function addFetched(data) {
  return {
    type: "ad/FETCHED",
    payload: data
  };
}
