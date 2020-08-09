import React from "react";
import { Grid, Divider, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CourseBox from "./CourseBox";
import { secondaryColor, textColor } from "../../../theme/theme";
import { useQuery } from "@apollo/client";
import {ALL_COURSES} from '../../Dashboard/Queries';

const useStyles = makeStyles((theme) => ({
  papergrid: {
    borderRadius: "20px",
    textAlign: "center",
    height: "500px",
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
    marginTop: "15px",
  },
  team: {
    borderRadius: "40px",
    height: "270px",
    background: "#f0f0f3",
    boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
  },
  title: {
    display: "inline-block",
    [theme.breakpoints.only("xs")]: {
      fontSize: "30px",
    },
  },
  body: {
    padding: "100px",
  },
  title: {
    fontSize: "20px",
    display: "inline-block",
  },
  btn: {
    borderRadius: "40px",
    height: "40px",
    background: "#00293b",
    boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
  },
}));

const CoursesCard = () => {
  const { loading, error, data } = useQuery(ALL_COURSES);
  const classes = useStyles();
  if(error) return <div>{error}</div>
  if(loading) return <div>{loading}</div>
  return (
    <Paper elevation={3} className={classes.papergrid}>
      <div style={{ textAlign: "center" }}>
        <h1 className={classes.title}>
          <i
            className="fas fa-calendar-alt fa-sm"
            style={{ display: "inline-block" }}
          />{" "}
          Courses
        </h1>
      </div>
      <Grid container spacing={3}>
        <Grid container justify="space-between">
          <Grid contianer xs={12}>
           {data && 
             data.allCourses.edges.map((course)=>{
              return <CourseBox subject={course.node.code} key={course.node.id} />;
             })
           }
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CoursesCard;
