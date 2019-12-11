const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ad/FETCHED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
