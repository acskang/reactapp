// import "./App.css";
import React from "react";
import LoginForm from "./LoginForm";
import { theme, ThemeProvider } from "@chakra-ui/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginForm />
    </ThemeProvider>
  );
}

export default App;
