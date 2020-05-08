import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down(480)]: {
      width: "100%",
    },
    maxHeight: 500,
    margin: "auto",
  },
  divison: {
    columnGap: "0.5rem",
    columnWidth: "232px",
    margin: "0px auto",
    [theme.breakpoints.down(480)]: {
      columnCount: 1,
    },
    [theme.breakpoints.up(480)]: {
      columnCount: 2,
    },
    [theme.breakpoints.up(730)]: {
      columnCount: 3,
    },
    [theme.breakpoints.up(1000)]: {
      columnCount: 4,
    },
  },
}));

export default function NotesCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.divison}>
      <Card className={classes.root} variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography variant="h6">Mohit</Typography>
            <Typography variant="body2" gutterBottom>
              Mohit Dhingra
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography variant="h6">Mohit</Typography>
            <Typography variant="body2" gutterBottom>
              The course is designed for students as well as working
              professionals to prepare for coding interviews. This course is
              going to have coding questions from school level to the level
              needed for product based companies like Amazom, Microsoft, Adobe
              etc.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography variant="h6">Mohit</Typography>
            <Typography variant="body2" gutterBottom>
              The course is designed for students as well as working
              professionals to prepare for coding interviews. This course is
              going to have coding questions from school level to the level
              needed for product based companies like Amazom, Microsoft, Adobe
              etc.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>{" "}
      <Card className={classes.root} variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography variant="h6">Mohit</Typography>
            <Typography variant="body2" gutterBottom>
              The course is designed for students as well as working
              professionals to prepare for coding interviews. This course is
              going to have coding questions from school level to the level
              needed for product based companies like Amazom, Microsoft, Adobe
              etc.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>{" "}
      <Card className={classes.root} variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography variant="h6">Mohit</Typography>
            <Typography variant="body2" gutterBottom>
              The course is designed for students as well as working
              professionals to prepare for coding interviews. This course is
              going to have coding questions from school level to the level
              needed for product based companies like Amazom, Microsoft, Adobe
              etc.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
