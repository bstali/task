import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import { getFields } from "../actions/index"

const useStyles = makeStyles({
  app: {
    textAlign: "center",
  },
});

export default function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { fieldsData } = useSelector((state) => state.fieldsData);
  console.log("fields", fieldsData);
  useEffect(() => {
    dispatch(getFields());
  }, [dispatch])
  
  return (
    <div className={classes.app}>
      <p>hello</p>
      
    </div>
  );
}
