import React from "react";
import CreateNote from "../src/components/Note";
import NotesCard from "../src/components/NoteCardComponent";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CreateNote></CreateNote>
      <Container>
        <NotesCard></NotesCard>
      </Container>
    </ThemeProvider>
  );
}

export default App;
