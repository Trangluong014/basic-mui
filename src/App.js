import { Container } from "@mui/material";
import "./App.css";
import PrimarySearchAppBar from "./component/Appbar";
import JobList from "./component/JobList";
import jobs from "./data.json";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <Container sx={{ mt: 3 }}>
          <JobList jobs={jobs} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
