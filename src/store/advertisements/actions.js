import request from "superagent";

const baseUrl = "http://localhost:4000";

export default function fetchAds(dispatch, getState) {
  request(`${baseUrl}/advertisements`)
    .then(response => {
      return dispatch(addsFetched(response.body));
    })
    .catch(console.error);
}
function addsFetched(data) {
  return {
    type: "advertisements/FETCHED",
    payload: data
  };
}
