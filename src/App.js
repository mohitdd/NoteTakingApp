import React from "react";
import CreateNote from "../src/components/Note";
import NotesCard from "../src/components/NoteCardComponent";
import Container from "@material-ui/core/Container";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CreateNote></CreateNote>
      <Container style={{ margin: "3%" }}></Container>
    </React.Fragment>
  );
}

export default App;
