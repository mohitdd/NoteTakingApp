import React from "react";
import CreateNote from "./components/CreateNoteComponent";
import NotesCard from "../src/components/NoteCardComponent";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { ConfigureStore } from "./store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CreateNote></CreateNote>
          <Container>
            <NotesCard></NotesCard>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
