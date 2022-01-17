import { FIELDS_DATA } from "./fields";
import axios from "axios";

export const fieldsData = (fieldsData) => {
  console.log("sssssssss", fieldsData);

  return {
    type: FIELDS_DATA,
    fieldsData: fieldsData,
  };
};

export const getFields = () => {
  return (dispatch) => {
    try {
      axios.get("http://localhost:8080/getfields").then((response) => {
        dispatch(fieldsData(response.data));
      });
    } catch (err) {
      console.log(err);
    }
  };
};
