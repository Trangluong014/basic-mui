import "./App.css";
import PrimarySearchAppBar from "./component/appbar";
import JobList from "./component/JobList";
import job from "./data.json";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <JobList>{job}</JobList>
    </div>
  );
}

export default App;
