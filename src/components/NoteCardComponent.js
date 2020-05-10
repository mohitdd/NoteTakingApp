import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchNotes } from "../actions/notes";

const mapStateToProps = (state) => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes),
});

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down(480)]: {
      width: "100%",
    },
    maxHeight: 500,
    marginBottom: "10px",
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

function NotesCard({ fetchNotes, notes }) {
  const classes = useStyles();

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className={classes.divison}>
      {notes.notes.map((note) => (
        <Card className={classes.root} variant="outlined">
          <CardActionArea>
            <CardContent>
              <Typography variant="h6">{note.title}</Typography>
              <Typography variant="body2" gutterBottom>
                {note.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NotesCard)
);
