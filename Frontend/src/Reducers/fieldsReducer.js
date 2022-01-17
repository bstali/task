// import { FIELDS_DATA } from "../actions/index";

const defaultState = {
  fields: []
}

const fieldReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FIELDS_DATA":
      return {
      ...state,
      fieldsData: action.fieldsData
    }
    default:
      return state;
  }
}

export default fieldReducer;