import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchNotes, deleteNote } from "../actions/notes";
import { CardActions } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

const mapStateToProps = (state) => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes),
  deleteNote: (noteId) => dispatch(deleteNote(noteId)),
});

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down(480)]: {
      width: "100%",
    },
    maxHeight: 500,
    marginBottom: "10px",
  },
  loading: {
    position: "absolute",
    left: "49%",
    top: "50%",
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
  iconAction: {
    visibility: "hidden",
  },
  icon: {
    "&:hover $iconAction": {
      visibility: "inherit",
    },
  },
}));

function NotesCard({ fetchNotes, deleteNote, notes }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const displayAnimation = () => {
    setChecked(!checked);
  };

  return (
    <div className={classes.divison}>
      {notes.loading ? (
        <CircularProgress
          className={classes.loading}
          color="secondary"
        ></CircularProgress>
      ) : (
        console.log("Hello")
      )}
      {notes.notes.map((note) => (
        <Card key={note.noteId} className={classes.root} variant="outlined">
          <CardActionArea
            className={classes.icon}
            onMouseOver={() => displayAnimation()}
            onMouseOut={() => displayAnimation()}
          >
            <CardContent>
              <Typography variant="h6">{note.title}</Typography>
              <Typography variant="body2" gutterBottom>
                {note.body}
              </Typography>
            </CardContent>
            <CardActions className={classes.iconAction}>
              <DeleteOutlinedIcon
                disableSpacing
                fontSize="small"
                onClick={async () => await deleteNote(note.noteId)}
              ></DeleteOutlinedIcon>
            </CardActions>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NotesCard)
);
