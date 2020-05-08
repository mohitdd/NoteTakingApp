import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { TextField, Button } from "@material-ui/core";

import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5%",
    "&.MuiExpansionPanelSummary-root.Mui-focused": {
      backgroundColor: "red",
    },
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

export default function CreateNote(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const theme = useTheme();
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
              fullWidth
              label="Title..."
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{
                classes: {
                  formControl: classes.labelProps,
                },
              }}
              onClick={handleExpandClick}
            ></TextField>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <TextField
                fullWidth
                label="Take a note..."
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
                <Button color="primary" variant="outlined" size="small">
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
