import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFields } from "../actions/index";
import Button from "../Components/Button";
import InputField from "../Components/InputField";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  app: {
    textAlign: "center",
    padding: "20px",
  },
  margin: {
    margin: "10px",
  },
});

export default function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { fieldsData } = useSelector((state) => state.fieldsData);

  useEffect(() => {
    dispatch(getFields());
  }, [dispatch]);

  const renderComponents = (component) => {
    {
      if (component.componentName === "inputField") {
        return (
          <Grid container>
            <Grid item xs={12} className={classes.margin}>
              <InputField
                label={component.label}
                name={component.name}
                type={component.type}
                id={component.id}
              />
            </Grid>
          </Grid>
        );
      }
      if (component.componentName === "button") {
        return (
          <Grid container>
            <Grid item xs={12} className={classes.margin}>
              <Button
                label={component.label}
                name={component.name}
                type={component.type}
                id={component.id}
              />
            </Grid>
          </Grid>
        );
      }
    }
  };

  return (
    <div className={classes.app}>
      {fieldsData ? (
        fieldsData.map((component) => {
          return renderComponents(component);
        })
      ) : (
        <></>
      )}
    </div>
  );
}
