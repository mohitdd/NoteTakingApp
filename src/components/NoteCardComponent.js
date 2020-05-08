import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 500,
  },
});

export default function NotesCard(props) {
  const classes = useStyles();

  return (
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
  );
}
