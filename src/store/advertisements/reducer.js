const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "advertisements/FETCHED": {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
