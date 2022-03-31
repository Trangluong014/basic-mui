import "./App.css";
import PrimarySearchAppBar from "./component/appbar";
import JobList from "./component/JobList";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <JobList></JobList>
    </div>
  );
}

export default App;
