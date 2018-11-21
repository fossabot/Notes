import {FETCH_USER} from "../actions/types";

//return object if logged in
// false if not logged in
// return null if not yet found result
export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state
  }
}
