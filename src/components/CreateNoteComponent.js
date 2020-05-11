import React, { Component, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { TextField, Button } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createNote } from "../actions/notes";

const mapDispatchToProps = (dispatch) => ({
  createNote: (note) => dispatch(createNote(note)),
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5%",
    marginBottom: "20px",
  },
  defaultProps: {
    padding: "10px",
    paddingTop: "8px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
  },
  labelProps: {
    fontWeight: 600,
  },
  labelNotes: {
    fontSize: "small",
  },
}));

function CreateNote(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [noteData, setNoteData] = React.useState({
    title: "",
    body: "",
    userId: "tsameerc@gmail.com",
  });

  const setTitle = (e) => {
    let value = e.target.value;

    setNoteData((prevVal) => ({
      ...prevVal,
      title: value,
    }));
  };

  const setBody = (e) => {
    let value = e.target.value;

    setNoteData((prevVal) => ({
      ...prevVal,
      body: value,
    }));
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();
  return (
    <Container>
      <Grid
        container
        className={classes.root}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} md={6}>
          <Box borderRadius="3%" className={classes.defaultProps}>
            <TextField
              value={noteData.title}
              onChange={setTitle}
              fontWeight="600"
              fullWidth
              placeholder="Title..."
              InputProps={{
                disableUnderline: true,
                classes: {
                  input: classes.labelProps,
                },
              }}
              InputLabelProps={{
                classes: {
                  formControl: classes.labelProps,
                },
              }}
              onClick={handleExpandClick}
            ></TextField>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <TextField
                value={noteData.body}
                onChange={setBody}
                fullWidth
                placeholder="Take a note..."
                InputProps={{ disableUnderline: true }}
                multiline
                rowsMax={8}
                InputLabelProps={{
                  classes: {
                    formControl: classes.labelNotes,
                  },
                }}
              ></TextField>
              <Grid item container justify="flex-end">
                <Button
                  color="primary"
                  variant="outlined"
                  size="small"
                  onClick={async () => {
                    await props.createNote(noteData);
                    setNoteData((prevVal) => ({
                      ...prevVal,
                      title: "",
                      body: "",
                    }));
                    handleExpandClick();
                  }}
                >
                  Close
                </Button>
              </Grid>
            </Collapse>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default withRouter(connect(null, mapDispatchToProps)(CreateNote));
